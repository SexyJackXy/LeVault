//import { createConnection } from 'mysql';
const mysql = require('mysql');

var con = createConnection({
    host: ' mydb',         //liest die nahmen aus der .env datei aus
    user: 'localhost',
    password: 'root',
    database: ''
})

function registerFunction(){
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (!name) {
        name = "null";
    }
    if (!email) {
        email = "null";
    }
    if (!password) {
        password = "null";
    }
    
    console.log(name , email, password);
}