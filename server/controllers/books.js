let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Book = require('../models/books');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, books) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
           res.render('books/index', {title: 'My favorite books', Books: books});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('books/details', {title: 'Add Book', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    });

}

module.exports.displayUpdatePage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToUpdate) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('books/update', {title: 'Update Book', book: bookToUpdate});
        }
    });
}

module.exports.processUpdatePage = (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "price": req.body.price,
        "author": req.body.author,
        "genre": req.body.genre

    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/books');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/books');
        }
    });
}