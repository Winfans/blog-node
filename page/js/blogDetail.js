var blogDetail = new Vue({
    el: "#blog-detail",
    data: {
        title: '',
        content: '',
        ctime: '',
        tags: '',
        views: ''
    },
    computed: {},
    created: function () {
        var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
        if (searchUrlParams === '') {
            return;
        }
        var bid = 1;
        for (var i = 0; i < searchUrlParams.length; i++) {
            if (searchUrlParams[i].split('=')[0] === 'bid') {
                try {
                    bid = parseInt(searchUrlParams[i].split('=')[1]);
                } catch (e) {
                    console.log(e)
                }
            }
        }

        axios({
            method: 'get',
            url: '/queryBlogById?bid=' + bid
        }).then(function (res) {
            console.log(res)
            var result = res.data.data[0];
            blogDetail.title = result.title;
            blogDetail.content = result.content;
            blogDetail.ctime = result.ctime;
            blogDetail.tags = result.tags;
            blogDetail.views = result.views;
        }).catch(function (res) {
            console.log("请求失败")
        })
    }
});


var sendComment = new Vue({
    el: "#send-comment",
    data: {},
    computed: {
        sendComment: function () {
            return function () {
                var searchUrlParams = location.search.indexOf("?") > -1 ? location.search.split("?")[1].split("&") : "";
                var bid = 1;
                for (var i = 0; i < searchUrlParams.length; i++) {
                    if (searchUrlParams[i].split('=')[0] === 'bid') {
                        try {
                            bid = parseInt(searchUrlParams[i].split('=')[1]);
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }
                var reply = document.getElementById("comment-reply").value;
                var name = document.getElementById("comment-name").value;
                var email = document.getElementById("comment-email").value;
                var content = document.getElementById("comment-content").value;
                axios({
                    method: "get",
                    url: "/addComment?bid=" + bid + "&parent=" + reply + "&userName=" + name + "&email=" + email + "&content=" + content
                }).then(function (res) {
                    console.log(res)
                })
            }
        }
    }
});
