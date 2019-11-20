// var express= require('express');
// var chalk=require('chalk');
// var path=require('path');

// var app=new express();//obj creation

// app.use(express.static(path.join(__dirname,"/public")));//to use the style and js and other static files

// app.get('/',function(req,res){
//res.send("hello");
//    res.sendFile(path.join(__dirname,"src/views/index.html"));//without using +
// })//upto / in root request

// app.get('/library',function(req,res){
//     res.send("Welcome to Library");
// })

// app.listen(3000,function(){
//     console.log('Listening to Port ' + chalk.red(3000));
// });

var express= require('express');
var chalk=require('chalk');
var path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
var app=new express();//obj creation
var nav=[
    {
        link:'/books',
        title:'Books'
    },
    {
        link:'/authors',
        title:'Authors'
    },
    {
        link:'/books/addform',
        title:'Add Books'
    }
];
var booksRouter=require('./src/routes/booksRouter')(nav);

app.use(express.static(path.join(__dirname,"/public")));//to use the style and js and other static files
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/books',booksRouter);

app.use(cors());
app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',function(req,res){
//    res.render('index.ejs',{list:['book1','book2','book3'],title:"Library"});
res.render('index.ejs',
    {
        nav,
        title:"Library"
    }
   );
});


// app.get('/books',function(req,res){
//     res.render('books.ejs',
//     {
//         nav,
//         title:"Books",
//         books
//     }
//     );
// })

// app.get('/books/:id',function(req,res){//request parameter
//     var i=req.params.id
//     res.render('book.ejs',
//     {
//         nav,
//         book:books[i]
//     }
//     );
// })

app.get('/authors',function(req,res){//callback
    res.render('authors.ejs',
    {
        nav,
        title:"Authors"
    }
    );
})



app.listen(3000,function(){
    console.log('Listening to Port ' + chalk.green(3000));
});
