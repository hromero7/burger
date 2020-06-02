const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "qgece45co4da436b",
    password: "dx7visbnxkrcui11",
    database: "ftfxxit55v1j59me"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id: " + connection.threadId);
});

module.exports = connection;