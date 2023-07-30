from pymongo import MongoClient

# Conectarse a la base de datos
client = MongoClient("mongodb://localhost:27017")
db = client['egresos']
collection = db['atendidos']

# Obtener todos los documentos de la colección
documentos = collection.find()

# Lista para almacenar los datos depurados
datos_dep = []

# Iterar sobre los documentos
for doc in documentos:
    # Extraer los campos deseados
    id = doc['id']
    sector = doc['sector']
    mes = doc['mes']
    edad = doc['edad']
    dias_estadia = doc['dias_estadia']

    # Verificar las condiciones de edad y días de estadía
    if edad > 18 and dias_estadia > 15:
        # Crear un diccionario con los campos depurados
        datos_dep.append({
            'id': id,
            'sector': sector,
            'mes': mes,
            'edad': edad,
            'dias_estadia': dias_estadia
        })

# Imprimir los datos depurados
for data in datos_dep:
    print(data)
