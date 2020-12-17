var express = require('express');
var router = express.Router();
var Phone = require('../models/books');

/* GET users listing. */
router.get('/', function (req, res, next) {
  Phone.find({}, (err, doks) => {
    res.status(200).json(doks)
  })
});

// add phone
router.post('/', function (req, res, next) {
  const { id, name, phone } = req.body;
  Phone.create({ id, name, phone }, function (err, doks) {
    res.status(201).json({
      status: "SUCCESS",
      data: doks
    });
  })
})


// edit phone
router.put('/:id', function (req, res, next) {
  console.log(req.body);
  const { name, phone } = req.body;
  Phone.findOneAndUpdate({ id: Number(req.params.id) }, { name, phone }, { new: true }, function (err, doks) {
    res.status(201).json({
      status: "SUCCESS",
      data: doks
    });
  })
})

// delete phone
router.delete('/:id', function (req, res, next) {
  Phone.findOneAndRemove({ id: Number(req.params.id) }, function (err, doks) {
    res.status(201).json({
      status: "SUCCESS",
      data: doks
    });
  })
})


module.exports = router;
