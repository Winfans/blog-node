const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "page")));


app.listen(10086, function () {
    console.log("服务器已启动")
});
