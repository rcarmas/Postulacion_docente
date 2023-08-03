from flask import Flask, render_template, request
import psycopg2
from pymongo import MongoClient

app = Flask(__name__)

# Configuración de la base de datos PostgreSQL
postgres_connection = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'admin',
    'host': 'localhost'
}

# Configuración de la base de datos MongoDB
# mongo_client = MongoClient('localhost', 27017)
# mongo_db = mongo_client['registro']
# mongo_collection = mongo_db['usuario']


# @app.route('/')
# def index():
#     return render_template('form1.html')


@app.route('/') #, methods=['GET', 'POST'])
def index():
    # if request.method == 'POST':
    #     ci = request.form['ci']
    #     # Use the 'ci' variable to fetch data from your API (here we are using the sample_data)
    #     # Replace 'sample_data' with your API call to fetch real data
    #     data = sample_data
    #     return jsonify(data)  # Return the JSON data to be processed by JavaScript
    return render_template('index.html')

@app.route('/documentacion')
def documentacion():
    return render_template('html/documentacion.html')

@app.route('/infoPersonal')
def infoPersonal():
    return render_template('html/informacion-personal.html')

@app.route('/login')
def login():
    return render_template('html/login.html')

@app.route('/register')
def register():
    return render_template('html/register.html')

@app.route('/verificar')
def verificar():
    return render_template('html/verificar.html')




@app.route('/procesar', methods=['POST'])
def procesar_formulario():
    # Obtener los datos del formulario
    identificacion = request.form['id']
    nombres = request.form['nombre']
    apellidos = request.form['apellido']
    mail = request.form['mail']
    contraseña = request.form['contraseña']
    

    # Guardar en PostgreSQL
    try:
        connection = psycopg2.connect(**postgres_connection)
        cursor = connection.cursor()
        cursor.execute('INSERT INTO registro (identificacion, nombres, apellidos, mail, contraseña ) VALUES (%s, %s, %s, %s, %s)', (identificacion, nombres, apellidos, mail, contraseña))
        connection.commit()
        connection.close()
    except psycopg2.Error as e:
        print(f"Error al insertar en PostgreSQL: {e}")

    # Guardar en MongoDB
    # try:
    #     mongo_collection.insert_one({'usuario': usuario, 'constraseña': contraseña})
    # except Exception as e:
    #     print(f"Error al insertar en MongoDB: {e}")

    return "Datos guardados correctamente"


if __name__ == '__main__':
    app.run(debug=True)
