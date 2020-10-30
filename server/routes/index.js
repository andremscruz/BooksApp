// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');
let indexController = require('../controllers/index')

/* GET home page. wildcard */
router.get('/', indexController.displayHomePage);

module.exports = router;
