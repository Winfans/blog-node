const dbutil = require("../util/DBUtil");

function addComment(blogId, parent, userName, email, comments, ctime, utime, success) {
    const insertSql = "insert into comments(`blog_id`,`parent`,`user_name`,`email`,`comments`,`ctime`,`utime`) values(?, ?,?, ?,?, ?, ?);";
    const params = [blogId, parent, userName, email, comments, ctime, utime];
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
    addComment: addComment,
};
