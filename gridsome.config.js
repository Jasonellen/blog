// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '南了个难难难',
  siteDescription:"南了个难难难",
  pathPrefix:"/my-app",
  // port:8080,

  //* 使用@gridsome/source-filesystem将文件读取到 GraphQL 中，以供模板使用
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/blog/**/*.md',
      }
    },
      /*
        gridsome安装插件@gridsome/source-strapi是为了可以使用strapi的数据
        strapi项目中安装 graphql是为了可以通过graphql获取strapi的数据
       */
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://113.31.154.207:1337',
        queryLimit: 1000, // Defaults to 100
        //* 使用strapi项目中的article数据，是个数组集合
        //* 这里的tag对应的集合名字是 StrapiTag  s-article->StrapiSArticle
        contentTypes: ['s-article','tag'],
        singleTypes: ['home'], //* 单个集合 如项目的首页封面等
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  //* 根据 gridsome.server.js中的集合数据，使用这里的集合模板，生成页面
  templates: {
    Article: [
      {
        path: '/article/:id',
        component: './src/templates/Article.vue'
      }
    ],
    //* 根据上面的集合数据作为模板 渲染对应页面组件
    StrapiSArticle:[
      {
        path: '/s-article/:id',
        component: './src/templates/Post.vue'
      }
    ],
    //* 根据上面的集合数据作为模板 渲染对应页面组件
    StrapiTag:[
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]

  }
}
