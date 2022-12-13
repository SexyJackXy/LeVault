//import { createConnection } from 'mysql';

dotenv.config({path:'./.env'})  

var con = createConnection({
    host: ' mydb',         //liest die nahmen aus der .env datei aus
    user: 'localhost',
    password: 'root',
    database: ''
})

function registerFunction(){
    var name = document.getElementById('nameInput');
    var email = document.getElementById('emailInput');
    var password = document.getElementById('passwordInput');

    console.log(name , email, password);
}