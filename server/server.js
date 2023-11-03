// import express from "express";

// const app = express();
// import UsersModel from "./models/Users";
// // connect to db
// import { connect } from "mongoose";
// connect(
//   "mongodb+srv://othmanelamrani:lamraniotman000@cluster0.gk8lzsx.mongodb.net/mern?retryWrites=true&w=majority"
// );

// // import user model

// app.get("/USER", async (request, result) => {
//   // result.send("<h1>Users</h1>");
//   const Users = await UsersModel.find();
//   result.json(Users);
// });

// app.listen("3001", () => {
//   console.log("Server work");
// });
// // import mongoose from "mongoose";

const express = require("express");
const app = express();
const UsersModel = require("./models/Users"); // Utilisation de require pour importer des modules
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://othmanelamrani:lamraniotman000@cluster0.gk8lzsx.mongodb.net/MERNROJ?retryWrites=true&w=majority"
);

app.get("/Users", async (request, result) => {
  try {
    const Users = await UsersModel.find();
    result.json(Users);
    console.log("fitch is okyy");
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    result.status(500).send("Erreur lors de la récupération des utilisateurs.");
  }
});

app.listen(3001, () => {
  console.log("Le serveur WORK");
});
