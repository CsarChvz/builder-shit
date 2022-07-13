const mongoose = require('mongoose');

const { Schema } = mongoose;

// Este es el esquema, se va a usar para crear el modelo
const mongoSchema = new Schema({
  // Se crea un esquema para cada cosa con sus parametros y los tipos
  // de datos que se van a poner en esos paraemtros
  //
  // En algunos casos, lo que se va a guardar o almacenar
  // van a ser un objeto con diferentes atributos, los cuales deben de cumplir
  // con los tipos de datos
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  googleToken: {
    access_token: String,
    refresh_token: String,
    token_type: String,
    expiry_date: Number,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  displayName: String,
  avatarUrl: String,
});

// eslint-disable-next-line prettier/prettier

// Se crea el modelo que queremos crear que sería usuario

const User = mongoose.model('User', mongoSchema);

// Exportaos el modelo para poder usarlo

module.exports = User;
