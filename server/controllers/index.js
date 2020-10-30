let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//create books model
let booksModel = require('../models/books');
let Book = booksModel.Book;


module.exports.displayHomePage = (req, res, next) => {
    res.render('content/index', {title: 'Home'});
}
