// ------- MYSQL ---------------

// const express = require('express');
// const app = express();
// // const oracledb = require('oracledb');
// const mysql = require('mysql');

// app.get('/', (req, res) => {
//     res.send('test');
// })

// let connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password",
//     database: "test"
// })

// connection.connect(() => console.log('connected to db...'));

// connection.query('SELECT * FROM `branch_supplier`', function(error, results, fields) {
//     console.log(error, results);
// });
 
// connection.end();


// const port = 3000 || process.env.PORT;

// app.listen(port, () => console.log(`listening on port ${port}`));




// ------------------ ORACLE ---------------

const express = require('express');
const app = express();
const oracledb = require('oracledb');
const oracleLogin = require('./config');

oracledb.getConnection(oracleLogin, (err, connection) => {
    console.log(connection, err);
    connection.execute(
        'SELECT * FROM forecast_7day WHERE ROWNUM < 100', function(err, result) {
            console.log(result);
        }
    )
})