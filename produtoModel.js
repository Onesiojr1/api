const  mongoose = require("mongoose");

const produtoSchema =  new mongoose.Schema({
    nome: String,
    preco: Number,
    descricao: String,
    img: String,
    categoria: String,
});

const produto = mongoose.model("produtos", produtoSchema);

module.exports = produto