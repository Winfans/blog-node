const fs = require("fs");

const globalConfig = {};

const conf = fs.readFileSync("./server.conf");

// 这里split里面的字符根据情况而定，看用的是什么系统，filter是es6的数组函数，过滤掉内容为空的元素
const configArr = conf.toString().split("\r\n").filter(conf => conf !== '');

for (let i = 0; i <configArr.length; i++) {
    // 这里使用es6数组解构
    const [key, value] = configArr[i].split("=");
    globalConfig[key.trim()] = value.trim();
}

module.exports = globalConfig;
