const express = require('express'); //Import ExpressJS
const path = require('path');       //Import Path
const mysql = require('mysql');     //Import Mysql
const dotenv = require('dotenv');   //Import dotenv

dotenv.config({path:'./.env'})      //Stellt die verbindung zu .env her

const app = express();              

//Verbindung zur Datenbank
const dbStart = mysql.createConnection({    
    host: process.env.HOST,         //liest die nahmen aus der .env datei aus
    user: process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});

//Startet die Datenbank Verbindung
dbStart.connect( (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Database started ...")
    }
});

//Auslagern der HTML Datein mithilfe von hbs
const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

app.set('view engine', 'hbs');

//Define Routes
app.use('/',require('./scripts/pages'));
app.use('/login', require('./scripts/login'));

//Startet den Webserver auf spezifischen Port
app.listen(5000, () =>{
    console.log("Server started ...")
});