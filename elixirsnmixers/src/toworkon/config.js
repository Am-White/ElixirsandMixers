
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "sho_sheller"
});

db.getConnection(function(err) {
    if (err) throw err;

    db.query("SELECT drinkname FROM recipes", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});

