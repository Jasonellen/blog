
<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead"
            :style="{
              backgroundImage:`url(${$page.detail.cover.url})`
            }"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
              <h1>{{$page.detail.title}}</h1>
<!--              <h2 class="subheading">Problems look mighty small from 150 miles up</h2>-->
              <span class="meta">
                                Posted by
                                <a>{{$page.detail.admin_user.firstname+$page.detail.admin_user.lastname}}</a>
                                on August 24, 2021{{$page.detail.created_at}}
                            </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7" v-html="transToHtml($page.detail.content)">
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query($id:ID!){
  detail:strapiSArticle(id:$id){
    id
    title
    content
    admin_user{
      id
      firstname
      lastname
    }
    tags{
      id
      title
    }
    created_at
    cover{
      id
      url
    }

  }
}
</page-query>
<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()
export default {
  metaInfo: {
    title: '详情'
  },
  methods:{
    transToHtml(text){
      return md.render(text)
    }
  }
}
</script>

<style></style>
