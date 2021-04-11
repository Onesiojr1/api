var express = require('express');
var router = express.Router();
const db = require("../db");
const produto = require("../produtoModel")

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log(produto)
  const produtos = await produto.find({});
  console.log(produtos);
  res.send(produtos);
});

module.exports = router;
