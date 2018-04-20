var mysql = require('mysql');
var dbconfig = {
    connection:{
        host: 'localhost',
        user: 'root',
        password: '18227339157/*qi'
    },
    database:"nodeTest"
};

var connection = mysql.createConnection(dbconfig.connection);

connection.query('DROP DATABASE IF EXISTS' + dbconfig.database + ';');
connection.query('CREATE DATABASE ' + dbconfig.database);
console.log('Success: Database Created!');

connection.query('USE' + dbconfig.database);
console.log('Success: Database Changed!');

connection.query('\
DROP TABLE IF EXISTS user;\
CREATE TABLE user ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(20) NOT NULL, \
    `password` VARCHAR(20) NOT NULL, \
    `createTime` DATETIME  NOT NULL,\
        PRIMARY KEY (`id`), \
);');

console.log('Success: user table Created!');

connection.end();