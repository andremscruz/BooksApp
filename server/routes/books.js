// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let bookController = require('../controllers/books');

/* GET books List page. READ */
router.get('/', bookController.displayBookList);

//  GET the Book Details page in order to add a new Book
router.get('/details', bookController.displayAddPage);

// POST process the Book Details page and create a new Book - CREATE
router.post('/details', bookController.processAddPage);

// GET the Book Details page in order to edit an existing Book
router.get('/update/:id', bookController.displayUpdatePage);

// POST - process the information passed from the details form and update the document
router.post('/update/:id', bookController.processUpdatePage);

// GET - process the delete by user id
router.get('/delete/:id', bookController.performDelete);


module.exports = router;
