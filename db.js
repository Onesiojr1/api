const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hakuna", {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.once('open', () => {
    console.log("conectado!")
})

// const mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://localhost:27017",
//                      { useUnifiedTopology: true},
//                      (error, connection) => {
//                          if(error) return console.log(error);
//                          global.connection = connection.db("hakuna");
//                          console.log("conectado!");
//                      });

module.exports = {}