const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '34.72.148.145',
    user: 'root',
    password: '',
    database: 'unix1'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL server.');
});

module.exports = db;
