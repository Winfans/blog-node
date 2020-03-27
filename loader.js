const fs = require("fs");
const globalConfig =  require("./config");
const controllerSet = [];
const pathMap = new Map();

const webPath = globalConfig["webPath"];
const files = fs.readdirSync(webPath);

for (let i = 0; i < files.length; i++) {
    const temp = require("./" + webPath + "/" + files[i]);
    if (temp.path) {
        for (let [key, value] of temp.path) {
            if (pathMap.get(key) == null) {
                pathMap.set(key, value);
            } else {
                throw new Error("url path异常，url："  + key);
            }
        }
        controllerSet.push(temp);
    }
}

module.exports = pathMap;

