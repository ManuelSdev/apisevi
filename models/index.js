
//Agrupa y exporta db connection & models

module.exports = {
  mongoose: require('mongoose'),
  connectMongoose: require('./connectMongoose'),
  // Anuncio: require('./Anuncio'),
  // Usuario: require('./Usuario')
}
