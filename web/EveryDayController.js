const everyDayDao = require("../dao/EveryDayDao");
const timeUtil = require("../util/TimeUtil");
const respUtil = require("../util/RespUtil");

const path = new Map();

function editEveryDay(request, response) {
    request.on("data", function (data) {
        everyDayDao.insertEveryDay(data.toString().trim(), timeUtil.getNow(), result => {
            response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
        });
    })
}

function queryEveryDay(request, response) {
    everyDayDao.queryEveryDay(result => {
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write(respUtil.writeResult("success", "查询成功", result));
        response.end();
    });
}

path.set("/editEveryDay", editEveryDay);
path.set("/queryEveryDay", queryEveryDay);

module.exports.path = path;
