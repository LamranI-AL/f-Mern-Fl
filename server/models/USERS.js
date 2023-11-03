// import { Schema, model } from "mongoose";
// const UsersSchema = new Schema({
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
//   email: {
//     type: String,
//   },
// });

// const UsersModel = model("Users", UsersSchema);
// export default UsersModel;

const { Schema, model } = require("mongoose");

const UsersSchema = new Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
});

const UsersModel = model("Users", UsersSchema);

module.exports = UsersModel; // Utilisation de module.exports pour exporter le modèle
