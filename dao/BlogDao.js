const dbutil = require("../util/DBUtil");

function insertBlog(title, content, tags, views, ctime, utime, success) {
    const insertSql = "insert into blog(`title`,`content`,`tags`,`views`,`ctime`,`utime`) values(?, ?,?, ?,?, ?)";
    const params = [title, content, tags, views, ctime, utime];
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

function queryBlogByPage(page, pageSize, success) {
    const querySql = "select * from blog order by id desc limit ?, ?";
    const params = [page, pageSize];
    const connection = dbutil.createConnection();
    connection.query(querySql, params, (error, result) => {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryBlogCount(success) {
    const querySql = "select count(1) as count from blog";
    const params = [];
    const connection = dbutil.createConnection();
    connection.query(querySql, params, (error, result) => {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryBlogById(id, success) {
    const querySql = "select * from blog where id= ?;";
    const params = [id];
    const connection = dbutil.createConnection();
    connection.query(querySql, params, (error, result) => {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports = {
    insertBlog: insertBlog,
    queryBlogByPage: queryBlogByPage,
    queryBlogCount: queryBlogCount,
    queryBlogById: queryBlogById,
};
