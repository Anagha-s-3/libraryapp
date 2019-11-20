const express = require('express');

const booksRouter = express.Router();

var books = [
    {
        title: "book1",
        genre: "Historical Fiction",
        author: "Lev Nicholayevich",
        image: "img1.jpg",
    },
    {
        title: "book2",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image: "img2.jpg",
    },
    {
        title: "book3",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image: "img3.jpg",

    },
    {
        title: "book4",
        genre: "Historical Fiction",
        author: "Victor Hugo",
        image: "img4.jpg",

    },

];

function router(nav) {
    booksRouter.route('/')
        .get(function (req, res) {
            res.render('books.ejs',
                {
                    nav,
                    title: "Books",
                    books
                }
            );
        });


    booksRouter.route('/addform')
        .get(function (req, res) {//callback
            res.render('addBooks.ejs',
                {
                    nav,
                    title: "Add Books"
                }
            );
        });
    booksRouter.route('/save')
        .post(function (req, res) {//callback
            console.log(req.body);
            res.send("hello");
        });
    booksRouter.route('/:id')
        .get(function (req, res) {
            var i = req.params.id
            res.render('book.ejs',
                {
                    nav,
                    book: books[i]
                }
            );
        });
    return booksRouter;
}
module.exports = router;
