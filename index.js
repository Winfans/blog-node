const express = require("express");
const path = require("path");
const globalConfig = require("./config");
const loader = require("./loader");

const app = express();

app.use(express.static(path.join(__dirname, "page")));

app.post("/editEveryDay", loader.get("/editEveryDay"));
app.get("/queryEveryDay", loader.get("/queryEveryDay"));
app.get("/addComment", loader.get("/addComment"));




app.post("/editBlog", loader.get("/editBlog"));
app.get("/queryBlogByPage", loader.get("/queryBlogByPage"));
app.get("/queryBlogCount", loader.get("/queryBlogCount"))
app.get("/queryBlogById", loader.get("/queryBlogById"));

app.listen(globalConfig["port"], function () {
    console.log("服务器已启动")
});
