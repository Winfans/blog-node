const mysql = require("mysql");

function createConnection() {
    return  mysql.createConnection({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "xwEPP-Fd2zcf",
        database: "my_blog"
    })
};

module.exports.createConnection = createConnection;
