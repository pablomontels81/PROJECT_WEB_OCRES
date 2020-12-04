var express = require("express");
var router = express.Router();
const test = require('./test.json')

/* GET home page. */
router.get('/homepage', (req,res) => {
  res.status(200).json(test)
});

module.exports = router;
