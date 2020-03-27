var dbutil = require("../util/DBUtil");

function insertTag(tag, ctime, utime, success) {
    const insertSql = "insert into tags(`tag`,`ctime`,`utime`) values(?, ?,?)";
    const params = [tag, ctime, utime];
    const connection = dbutil.createConnection();
    connection.query(insertSql, params, (error, result) => {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryTag(tag, success) {
    const insertSql = "select * from tags where tag = ?;";
    const params = [tag];
    const connection = dbutil.createConnection();
    connection.query(insertSql, params, (error, result) => {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports = {
    insertTag: insertTag,
    queryTag: queryTag
};
