const express = require('express');
const app = express();
// const oracledb = require('oracledb');
const mysql = require('mysql');

app.get('/', (req, res) => {
    res.send('test');
})

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test"
})

connection.connect(() => console.log('connected to db...'));

connection.query('SELECT * FROM `employee`', function(error, results, fields) {
    console.log(error, results);
});
 
connection.end();


const port = 3000 || process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));