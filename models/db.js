const mysql = require("mysql");
const dbConfig = require("../config/dbconfig.js");


// Datenbankverbindung erzeugen
const con = mysql.createConnection( {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB

});

// Datenbankverbindung öffnen
con.connect( error => {
    if (error) throw error;
    console.log("Succesfully connected to the database");
});


 module.exports = con;