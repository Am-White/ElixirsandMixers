
const mysql = require("mysql");
const util = require("util");
var express = require("express");

//CONNECTION :)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"Kingtendencies3!",
    database: "sho_sheller"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id: " + connection.threadId + "\n");
    readRecipes();

});

function readRecipes() {
  connection.query("SELECT * FROM recipes", function(err, res) {
    if (err) throw (err);

    console.log(res);
    connection.end();
  });
}

connection.query = util.promisify(connection.query);

module.exports = connection;