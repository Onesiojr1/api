var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send( [    {
    nome: "Smash Supremo",
    preco: "19,90",
    img: "/img/Smash.png"
  },
  {
    nome: "Cheddar Melt",
    preco: "17,90",
    img: "/img/Smash.png"
  }
]);
});

module.exports = router;
