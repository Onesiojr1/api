const express = require('express');
const router = express.Router();
const db = require("../db");
const produto = require("../produtoModel");
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

/* GET users listing. */
router.get('/', async function (req, res, next) {
  console.log(produto)
  const produtos = await produto.find({});
  console.log(produtos);
  res.send(produtos);
});

router.post('/', upload.single('img'), async function (req, res) {
  try {
    const prod = new produto({
      img: `/images/${req.file.filename}`,
      ...req.body,
    });

    const novoProduto = await prod.save();

    res.send(novoProduto);
  } catch (error) {
    console.log(error);
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


router.delete("/delete/:id", async function (req, res, next) {
  try {
    await produto.findByIdAndDelete(req.params.id);
    res.send("Deletado com sucesso");
  } catch (error) {
    return next(error);
  }
});


module.exports = router;
