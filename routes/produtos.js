var express = require('express');
var router = express.Router();
const db = require("../db");
const produto = require("../produtoModel")

/* GET users listing. */
router.get('/', async function (req, res, next) {
  console.log(produto)
  const produtos = await produto.find({});
  console.log(produtos);
  res.send(produtos);
});

router.post('/', async function (req, res) {
  const produtos = new produto(req.body);

  try {
    await produtos.save();
    res.send(produtos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/update/:id", async function (req, res, next) {
  try {
    await produto.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.send("Atualizado com sucesso");
  } catch (error) {
    return next(error)
  }
});


router.delete("/delete/:id", async function (req, res) {
  try {
    await produto.findByIdAndDelete(req.params.id);
    res.send("Deletado com sucesso");
  } catch {
    return next(error);
  }
});


module.exports = router;
