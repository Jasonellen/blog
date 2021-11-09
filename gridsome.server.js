// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    //* 添加一个集合，集合的名称是 Article
    const articleCollection = addCollection('Article')

    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    let data = require('./src/lib/articles.json')
    //* 根据获取的数据，往集合中添加节点数据(预渲染的数据)
    for (const item of data) {
      articleCollection.addNode({
        id: item.id,
        title: item.title,
        content: item.body
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    //* 可以在这里动态创建路由
    createPage({
      path: '/my-page',
      component: './src/templates/MyPage.vue'
    })
  })
}
