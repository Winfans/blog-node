var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");
var url = require("url");
var commentDao = require("../dao/CommentDao")
var path = new Map();

function addComment(request, response) {
    var params = url.parse(request.url, true).query;

    commentDao.addComment(parseInt(params.bid), parseInt(params.parent), params.userName, params.email, params.content, timeUtil.getNow(), timeUtil.getNow(), function (res) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "评论成功", null));
        response.end();
    })
}
path.set("/addComment", addComment);

module.exports.path = path;
