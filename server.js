const { strict } = require('assert');
const express =  require('express');
const es6  = require('express-es6-template-engine');
const path = require('path');    
const app = express();



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

app.get('/login',(req,res) =>{
    res.render('login');
})

app.get('/register',(req,res) =>{
    res.render('register');
})

app.get('/test',(req,res) =>{
    res.render('test');
})

app.get('../scripts/client.js"',(req, res) =>{

})

app.listen(5000, () =>{
    console.log("Server started ...")
})