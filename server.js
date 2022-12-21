const { strict } = require('assert');
const express =  require('express');
const es6  = require('express-es6-template-engine');
const path = require('path');    
const app = express();
var mysql = require('mysql');

//Implementierung von CSS
const cssDir = path.join(__dirname, './files/css/');
app.use(express.static(cssDir));

//Implementierung von Ausgelagerten Scripts
app.use(express.static('./files/scripts/'));

//Auslagern use HTML as View Engien
app.engine('html', es6);
app.set('views','files/html');
app.set('view engine', 'html');


//Darstellund der einezelenen Seiten
app.get('/',(req,res) =>{
    res.render('index');
})

app.get('/login.html',(req,res) =>{
    res.render('../html/login.html');
})

app.get('/register.php',(req,res) =>{
    res.render('../html/register.php');
})

app.get('/test.html',(req,res) =>{
    res.render('../html/test.html');
})

app.get('../scripts/client.js"',(req, res) =>{

})

app.listen(5000, () =>{
    console.log("Server started ...")
})
