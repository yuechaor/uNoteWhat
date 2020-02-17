module.exports = {
    //base: '/uNoteWhat/',
    // 网站 Title
    title: 'uNoteWhat',

    // 网站描述
    base: '/uNoteWhat/',
    description: 'My Learning Notes, Flutter坑，Dart坑，坑，issue，errors',
    head: [
        ['link', { rel: 'icon', href: '/img/avatar.jpeg' }],
    ],
    // locales: {
    //     '/zh': {
    //         lang: 'zh-CN',
    //     },
    // },
    // locales: {
    //     '/': {
    //         lang: 'en-US',
    //     },
    // },
    locales: {
        '/': {
            lang: 'en-US',
        },
    },

    // 使用的主题
    theme: 'meteorlxy',

    // 主题配置
    themeConfig: {
        // 网站语言
        // locales: {
        //     '/': {
        //         lang: require('vuepress-theme-meteorlxy/lib/langs/en-US'),
        //     },
        // },
        // 主题语言，参考下方 [主题语言] 章节
        // lang: require('vuepress-theme-meteorlxy/lib/langs/en-US'),
        //lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
        lang: {

            //locales: 'en-US',
            // 或者
            //lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
            home: 'Home',
            posts: 'Notes',
            category: 'category',
            categories: 'categories',
            allCategories: 'All',
            tag: 'tag',
            tags: 'tags',
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
            prevPost: 'prevNote',
            nextPost: 'nextNote',
            toc: 'Table of Content'
            // about: 'about me',
        },

        // 个人信息（没有或不想设置的，删掉对应字段即可）
        personalInfo: {
            // 昵称
            nickname: 'PrintF',

            // 个人简介
            description: 'Two Hours a day, Keeps Foolish Away',

            // 电子邮箱
            email: 'yuechaor@gmail.com',

            // 所在地
            location: 'Melbourne, AU',

            // 组织
            //organization: 'Xi\'an Jiao Tong University',

            // 头像
            // 设置为外部链接
            avatar: '/img/avatar.jpeg',
            // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
            // avatar: '/img/avatar.jpg',


            // 社交平台帐号信息
            sns: {
                // Github 帐号和链接
                github: {
                    account: 'yuechaor',
                    link: 'https://github.com/yuechaor',
                },
            },
        },

        // 上方 header 的相关设置
        header: {
            // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
            background: {
                // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
                //url: '/assets/img/bg.jpg',

                // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
                useGeo: true,
            },

            // 是否在 header 显示标题
            showTitle: true,
        },

        // 是否显示文章的最近更新时间
        lastUpdated: true,

        // 顶部导航栏内容
        nav: [
            { text: 'Home', link: '/', exact: true },
            { text: 'Notes', link: '/posts/', exact: false },
            { text: 'About', link: '/about/', exact: false },

        ],

        // 评论配置，参考下方 [页面评论] 章节
        // comments: {
        //     owner: 'meteorlxy',
        //     repo: 'vuepress-theme-meteorlxy',
        //     clientId: 'MY_CLIENT_ID',
        //     clientSecret: 'MY_CLIENT_SECRET',
        // },
        comments: false,

        // 分页配置
        pagination: {
            perPage: 5,
        },

        // 默认页面（可选，默认全为 true）
        // defaultPages: {
        //     // 是否允许主题自动添加 Home 页面 (url: /)
        //     home: true,
        //     // 是否允许主题自动添加 Posts 页面 (url: /posts/)
        //     posts: true,
        // },
    },
}