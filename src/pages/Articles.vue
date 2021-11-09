<template>
  <Layout>
    <div>
      <h1>Articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.node.id">
<!--          <g-link :to="'article/'+article.node.id">{{ article.node.title }}</g-link>-->
          <g-link :to="article.node.path">{{ article.node.title }}</g-link>
        </li>
      </ul>
    </div>
  </Layout>
</template>
<!-- 将allArticle 查到的数据传递给 articles-->
<page-query>
query {
  articles: allArticle{
    edges{
      node{
        id
        title
        content
        path
      }
    }
  }
}

</page-query>

<script>
import axios from 'axios'

export default {
  name: 'Articles',
  data () {
    return {
    }
  },
  async created () {
    //* 这个列表是客户端请求接口渲染的，（非服务端渲染，详情是服务端渲染）
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // let data = require('../lib/articles.json')
    // this.articles = data
    
    console.log(this.$page,"graphql中获取的数据")
  },
  computed:{
    articles:function (){
      return this.$page.articles.edges
    }
  }
}
</script>

<style>

</style>
