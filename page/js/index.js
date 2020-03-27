// 使用vue改造每日一句
var everyDay = new Vue({
    el: '#every-day',
    data: function () {
        return {
            content: '巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉'
        };
    },
    computed: {
        getContent: function () {
            return this.content;
        },
    },
    created() {
        axios.get('/queryEveryDay').then(res => {
            this.content = res.data.data[0].content;
        }).catch(err => {
            console.log(err)
        });
    }
});

// 使用vue改造文章列表
var articleList = new Vue({
    el: '#article-list',
    data: function () {
        return {
            page: 1,
            pageSize: 5,
            count: 0,
            articleList: [],
            pageNumList: [],
        };
    },
    computed: {
        jumpTo: function() {
            return function (page) {
                articleList.getPage(page, this.pageSize);
            }
        },
        getPage: function () {
            return function (page, pageSize) {
                axios.get("/queryBlogByPage?page=" + (page - 1) * pageSize + "&pageSize=" + pageSize)
                    .then(function (res) {
                        var result = res.data.data;
                        var list = [];
                        for (var i = 0; i < result.length; i++) {
                            var temp = {};
                            temp.title = result[i].title;
                            temp.content = result[i].content;
                            temp.date = result[i].date;
                            temp.views = result[i].views;
                            temp.tags = result[i].tags;
                            temp.id = result[i].id;
                            temp.link = '/blogDetail.html?bid=' + result[i].id;
                            list.push(temp);
                        }
                        articleList.articleList = list;
                        articleList.page = page;
                    }).catch(function (err) {
                    console.log("请求错误")
                });

                axios.get("/queryBlogCount")
                    .then(res => {
                        articleList.count = res.data.data[0].count;
                        articleList.generatePageTool;
                    });
            }
        },
        generatePageTool() {
            const nowPage = this.page;
            const pageSize = this.pageSize;
            const totalCount = this.count;
            const result = [];
            result.push({text: "<<", page: 1});
            if (nowPage > 2) {
                result.push({text: nowPage - 2, page: nowPage - 2})
            }
            if (nowPage > 1) {
                result.push({text: nowPage - 1, page: nowPage - 1})
            }
            result.push({text: nowPage, page: nowPage});
            if (nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text: nowPage + 1, page: nowPage + 1})
            }
            if (nowPage + 2 <= (totalCount + pageSize - 1) / pageSize) {
                result.push({text: nowPage + 2, page: nowPage + 2})
            }
            result.push({text: ">>", page: nowPage + 1});
            this.pageNumList = result;
            return result;
        }
    },
    created: function () {
        this.getPage(this.page, this.pageSize);
    }
});




