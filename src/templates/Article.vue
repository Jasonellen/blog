<template>
  <Layout>
    <div>
      <h1>{{ $page.article.title }}</h1>
      <div>{{ $page.article.content }}</div>
    </div>
  </Layout>
</template>

<!-- $id 是动态id参数，ID！是肯定存在的类型断言-->
<!-- 通过query 获取等到动态id 传给 查询语句-->
<page-query>
query($id:ID!) {
  article(id:$id){
    id
    title
    content
  }
}
</page-query>

<script>
export default {
  name: 'Article',
  metaInfo() {
    console.log(this.$page,444)
    return {
      title: this.$page.article.title
    }
  }
}
</script>

<style>

</style>
