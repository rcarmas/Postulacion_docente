/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.find()
    .skip((page - 1) * perPage)
    .limit(perPage)
    .then(animes => {
      Anime.countDocuments().then(count => {
        res.render('index', { animes, count, page });
      });
    })
    .catch(err => res.status(500).send('Error al obtener los animes de la base de datos'));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos'));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos'));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.countDocuments().then(count => {
    Anime.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .then(animes => {
        res.render('index', { animes, count, page: parseInt(page) });
      })
      .catch(err => res.status(500).send('Error al obtener los animes de la base de datos'));
  }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos'));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos'));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos'));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.countDocuments().then(count => {
    Anime.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .then(animes => {
        res.render('index', { animes, count, page: parseInt(page) });
      })
      .catch(err => res.status(500).send('Error al obtener los animes de la base de datos'));
  }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos'));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos'));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos'));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos'));
});

// Agregar datos a la base de datos
app.post('/animes', (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos'));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;

  Anime.countDocuments().then(count => {
    Anime.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .then(animes => {
        res.render('index', { animes, count, page: parseInt(page) });
      })
      .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
  }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});


app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos
app.post('/animes', (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;
  const query = req.query.q;

  if (query && query.trim().length > 0 && /^\d+$/.test(query)) {
    Anime.find({ anime_id: query })
      .then(animes => {
        res.render('index', { animes, searchQuery: query, count: animes.length, page: 1 });
      })
      .catch(err => res.status(500).send('Error al buscar los animes en la base de datos: ' + err));
  } else {
    Anime.countDocuments().then(count => {
      Anime.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then(animes => {
          res.render('index', { animes, count, page: parseInt(page), searchQuery: '' });
        })
        .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
    }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
  }
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});

app.post('/animes/:id', (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos
app.post('/animes', (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(() => res.redirect('/'))
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/


/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Función de extracción (Extract)
async function extractData() {
  const client = new MongoClient('mongodb://localhost:27018', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstv');
    const collection = database.collection('animes');
    const data = await collection.find().toArray();
    return data;
  } finally {
    await client.close();
  }
}

// Función de carga (Load)
async function loadData(data) {
  const client = new MongoClient('mongodb://localhost:27050', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstvETL');
    const collection = database.collection('animesETL');

    for (const item of data) {
      // Verificar si el documento ya existe en la colección
      const existingDoc = await collection.findOne({ anime_id: item.anime_id });

      if (existingDoc) {
        // Actualizar el documento existente
        await collection.updateOne({ _id: existingDoc._id }, { $set: item });
      } else {
        // Insertar el nuevo documento
        await collection.insertOne(item);
      }
    }
  } finally {
    await client.close();
  }
}

// Función de transformación (Transform)
function transformData(data) {
  // Filtrar los datos para obtener solo aquellos con 'type' igual a 'Movie'
  const filteredData = data.filter(item => item.type === 'Movie');

  // Calcular estadísticas de la columna 'type' cuando es igual a 'Movie'
  const movieCount = filteredData.length;
  const ratingSum = filteredData.reduce((sum, item) => sum + item.rating, 0);
  const averageRating = movieCount > 0 ? ratingSum / movieCount : 0;

  return {
    filteredData,
    movieCount,
    ratingSum,
    averageRating
  };
}

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;
  const query = req.query.q;

  if (query && query.trim().length > 0 && /^\d+$/.test(query)) {
    Anime.find({ anime_id: query })
      .then(animes => {
        res.render('index', { animes, searchQuery: query, count: animes.length, page: 1 });
      })
      .catch(err => res.status(500).send('Error al buscar los animes en la base de datos: ' + err));
  } else {
    Anime.countDocuments().then(count => {
      Anime.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then(animes => {
          res.render('index', { animes, count, page: parseInt(page), searchQuery: '' });
        })
        .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
    }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
  }
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});

app.post('/animes/:id', async (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, req.body)
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', async (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos y ejecutar ETL
app.post('/animes', async (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

// Ruta para mostrar los datos en el navegador
app.get('/data', async (req, res) => {
  const client = new MongoClient('mongodb://localhost:27050', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstvETL');
    const collection = database.collection('animesETL');
    const data = await collection.find().toArray();
    res.render('data', { data });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/


/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Función de extracción (Extract)
async function extractData() {
  const client = new MongoClient('mongodb://localhost:27018', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstv');
    const collection = database.collection('animes');
    const data = await collection.find().toArray();
    return data;
  } finally {
    await client.close();
  }
}

// Función de carga (Load)
async function loadData(data) {
  const client = new MongoClient('mongodb://localhost:27050', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstvETL');
    const collection = database.collection('animesETL');

    for (const item of data) {
      // Verificar si el documento ya existe en la colección
      const existingDoc = await collection.findOne({ anime_id: item.anime_id });

      if (existingDoc) {
        // Actualizar el documento existente
        delete item._id;
        await collection.updateOne({ _id: existingDoc._id }, { $set: item });
      } else {
        // Insertar el nuevo documento
        await collection.insertOne(item);
      }
    }
  } finally {
    await client.close();
  }
}

// Función de transformación (Transform)
function transformData(data) {
  // Filtrar los datos para obtener solo aquellos con 'type' igual a 'Movie'
  const filteredData = data.filter(item => item.type === 'Movie');

  // Calcular estadísticas de la columna 'type' cuando es igual a 'Movie'
  const movieCount = filteredData.length;
  const ratingSum = filteredData.reduce((sum, item) => sum + item.rating, 0);
  const averageRating = movieCount > 0 ? ratingSum / movieCount : 0;

  return {
    filteredData,
    movieCount,
    ratingSum,
    averageRating
  };
}

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;
  const query = req.query.q;

  if (query && query.trim().length > 0 && /^\d+$/.test(query)) {
    Anime.find({ anime_id: query })
      .then(animes => {
        res.render('index', { animes, searchQuery: query, count: animes.length, page: 1 });
      })
      .catch(err => res.status(500).send('Error al buscar los animes en la base de datos: ' + err));
  } else {
    Anime.countDocuments().then(count => {
      Anime.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then(animes => {
          res.render('index', { animes, count, page: parseInt(page), searchQuery: '' });
        })
        .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
    }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
  }
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});

app.post('/animes/:id', async (req, res) => {
  Anime.findByIdAndUpdate(req.params.id, { $set: fieldsToUpdate })
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', async (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos y ejecutar ETL
app.post('/animes', async (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

// Ruta para mostrar los datos en el navegador
app.get('/data', async (req, res) => {
  const client = new MongoClient('mongodb://localhost:27050', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstvETL');
    const collection = database.collection('animesETL');
    const data = await collection.find().toArray();
    res.render('data', { data });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});*/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();

// Configuración de la base de datos MongoDB
mongoose.connect('mongodb://localhost:27018/programstv', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configuración del middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Definición del esquema y modelo de datos
const animeSchema = new mongoose.Schema({
  anime_id: Number,
  name: String,
  genre: String,
  type: String,
  episodes: Number,
  rating: Number,
  members: Number
});

const Anime = mongoose.model('Anime', animeSchema, 'animes');

// Función de extracción (Extract)
async function extractData() {
  const client = new MongoClient('mongodb://localhost:27018', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstv');
    const collection = database.collection('animes');
    const data = await collection.find().toArray();
    return data;
  } finally {
    await client.close();
  }
}

// Función de carga (Load)
async function loadData(data) {
  const client = new MongoClient('mongodb://localhost:27050', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstvETL');
    const collection = database.collection('animesETL');

    for (const item of data) {
      // Verificar si el documento ya existe en la colección
      const existingDoc = await collection.findOne({ anime_id: item.anime_id });

      if (existingDoc) {
        // Actualizar el documento existente
        await collection.deleteOne({ _id: existingDoc._id });
        await collection.insertOne(item);
      } else {
        // Insertar el nuevo documento
        await collection.insertOne(item);
      }
    }
  } finally {
    await client.close();
  }
}

// Función de transformación (Transform)
function transformData(data) {
  // Filtrar los datos para obtener solo aquellos con 'type' igual a 'Movie'
  const filteredData = data.filter(item => item.type === 'Movie');

  // Calcular estadísticas de la columna 'type' cuando es igual a 'Movie'
  const movieCount = filteredData.length;
  const ratingSum = filteredData.reduce((sum, item) => sum + item.rating, 0);
  const averageRating = movieCount > 0 ? ratingSum / movieCount : 0;

  return {
    filteredData,
    movieCount,
    ratingSum,
    averageRating
  };
}

// Ruta para renderizar el formulario de creación de nuevos animes
app.get('/animes/new', (req, res) => {
  res.render('new');
});

// Rutas
app.get('/', (req, res) => {
  const page = req.query.page || 1;
  const perPage = 5;
  const query = req.query.q;

  if (query && query.trim().length > 0 && /^\d+$/.test(query)) {
    Anime.find({ anime_id: query })
      .then(animes => {
        res.render('index', { animes, searchQuery: query, count: animes.length, page: 1 });
      })
      .catch(err => res.status(500).send('Error al buscar los animes en la base de datos: ' + err));
  } else {
    Anime.countDocuments().then(count => {
      Anime.find()
        .skip((page - 1) * perPage)
        .limit(perPage)
        .then(animes => {
          res.render('index', { animes, count, page: parseInt(page), searchQuery: '' });
        })
        .catch(err => res.status(500).send('Error al obtener los animes de la base de datos: ' + err));
    }).catch(err => res.status(500).send('Error al contar los documentos en la base de datos: ' + err));
  }
});

app.get('/animes/:id', (req, res) => {
  Anime.findById(req.params.id)
    .then(anime => res.render('edit', { anime }))
    .catch(err => res.status(500).send('Error al obtener el anime de la base de datos: ' + err));
});

app.post('/animes/:id', async (req, res) => {
  const updatedFields = req.body; // Obtener los campos actualizados desde el cuerpo de la solicitud
  const { _id, ...fieldsToUpdate } = updatedFields; // Excluir el campo _id y obtener los demás campos

  Anime.findByIdAndUpdate(req.params.id, { $set: fieldsToUpdate })
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al actualizar el anime en la base de datos: ' + err));
});

app.post('/animes/:id/delete', async (req, res) => {
  Anime.findByIdAndRemove(req.params.id)
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al eliminar el anime de la base de datos: ' + err));
});

// Agregar datos a la base de datos y ejecutar ETL
app.post('/animes', async (req, res) => {
  const newAnime = new Anime(req.body);
  newAnime.save()
    .then(async () => {
      const extractedData = await extractData();
      const transformedData = transformData(extractedData);
      await loadData(transformedData.filteredData);
      res.redirect('/');
    })
    .catch(err => res.status(500).send('Error al agregar el anime a la base de datos: ' + err));
});

// Ruta para mostrar los datos en el navegador
app.get('/data', async (req, res) => {
  const client = new MongoClient('mongodb://localhost:27050', { useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('programstvETL');
    const collection = database.collection('animesETL');
    const data = await collection.find().toArray();
    res.render('data', { data });
  } finally {
    await client.close();
  }
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

