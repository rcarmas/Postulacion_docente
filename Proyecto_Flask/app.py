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


@app.route('/')
def index():
    return render_template('form.html')


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
