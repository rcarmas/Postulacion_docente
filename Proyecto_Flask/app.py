from flask import Flask, render_template, request
from pymongo import MongoClient
from bson.objectid import ObjectId
from pymongo.errors import ServerSelectionTimeoutError

app = Flask(__name__)
app.static_folder = 'static'  # Configurar la carpeta de archivos estáticos

def connect_to_database():
    try:
        # Intentar conectarse a la base de datos en el puerto 27017
        client = MongoClient("mongodb://localhost:27017", serverSelectionTimeoutMS=2000)
        db = client['egresos']
        collection = db['atendidos']
        print("Conectado a la base de datos en el puerto 27017")
        return collection
    except ServerSelectionTimeoutError:
        try:
            # Si la conexión al puerto 27017 falla, intentar conectarse al puerto 27018
            client = MongoClient("mongodb://localhost:27018", serverSelectionTimeoutMS=2000)
            db = client['egresos']
            collection = db['atendidos']
            print("Conectado a la base de datos en el puerto 27018")
            return collection
        except ServerSelectionTimeoutError:
            # Si la conexión a ambos puertos falla, mostrar un mensaje de error
            print("Error: No se pudo establecer conexión con los puertos 27017 y 27018")
            return None

collection = connect_to_database()

@app.route('/', methods=['GET', 'POST'])
def index():
    if collection is None:
        return "Error: No se pudo establecer conexión con la base de datos"
    
    if request.method == 'POST':
        id = request.form['id']
        nombre = request.form['nombre']
        provincia = request.form['provincia']
        clase = request.form['clase']
        sector = request.form['sector']
        mes = request.form['mes']
        sexo = request.form['sexo']
        edad = request.form['edad']
        dias_estadia = request.form['dias_estadia']

        document = {
            'id': id,
            'nombre': nombre,
            'provincia': provincia,
            'clase': clase,
            'sector': sector,
            'mes': mes,
            'sexo': sexo,
            'edad': edad,
            'dias_estadia': dias_estadia
        }

        collection.insert_one(document)

        return "Registro guardado exitosamente"

    return render_template('form.html')

@app.route('/buscar', methods=['GET'])
def buscar():
    if collection is None:
        return "Error: No se pudo establecer conexión con la base de datos"
    
    buscar_object_id = request.args.get('buscar_object_id')
    buscar_id = request.args.get('buscar_id')
    
    if buscar_object_id:
        try:
            registro = collection.find_one({'_id': ObjectId(buscar_object_id)})
            registros = [registro] if registro else []
        except Exception as e:
            print("Error al buscar por Object ID:", str(e))
            registros = []
    elif buscar_id:
        registros = collection.find({'id': buscar_id})
    else:
        registros = []
    
    return render_template('leer.html', registros=registros)

@app.route('/eliminar', methods=['POST'])
def eliminar():
    if collection is None:
        return "Error: No se pudo establecer conexión con la base de datos"
    
    eliminar_id = request.form['eliminar_id']

    try:
        # Buscar el documento por su id personalizado
        documento = collection.find_one({'id': eliminar_id})
        # Obtener el _id del documento
        _id = documento['_id']
        # Eliminar el documento por su _id
        collection.delete_one({'_id': _id})
        return "Registro eliminado exitosamente"
    except Exception as e:
        return "Error al eliminar el registro: {}".format(str(e))

if __name__ == '__main__':
    app.run(debug=True)
