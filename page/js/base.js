var randomTags = new Vue({
    el: '#random-tags',
    data: function () {
        return {
            tags: ["test1", "test2", "test3", "test4", "test5", "test6", "test1", "test2", "test3", "test4", "test5", "test6"]
        };
    },
    computed: {
        randomColor: function () {
            return function () {
                var red = Math.random() * 255;
                var green = Math.random() * 255;
                var blue = Math.random() * 255;
                return "rgb(" + red + "," + green + "," + blue + ")";
            };
        },
        randomSize: function () {
            return function () {
                return Math.random() * 20 + 12 + "px";
            };
        }
    },
    created: function () {

    }
});

var newHot = new Vue({
    el: '#new-hot',
    data: {
        titleList: [
            {
                title: '这一个连接',
                link: ''
            },
            {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }, {
                title: '这一个连接',
                link: ''
            }
        ]
    }
});

var newComments = new Vue({
    el: '#new-comments',
    data: function () {
        return {
            commentList: [
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
                {
                    name: '这里是用户名',
                    date: '2020-3-3',
                    comment: '这里是评论',
                },
            ]
        };
    }
});
