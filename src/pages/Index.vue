<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead"
            :style="{
              backgroundImage:`url(${$page.home.edges[0].node.cover.url})`
            }">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{$page.home.edges[0].node.title}}</h1>
              <span class="subheading">{{$page.home.edges[0].node.des}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <template v-for="article in $page.articles.edges">
            <!-- Post preview-->
            <div class="post-preview" :key="article.node.id">
              <g-link :to="'/s-article/'+article.node.id">
                <h2 class="post-title">{{article.node.title}}</h2>
<!--                <h3 class="post-subtitle">{{article.node.content}}</h3>-->
              </g-link>
              <g-link style="margin-right:10px;text-decoration: underline" :to="'/tag/'+tag.id" v-for="tag in article.node.tags" :key="tag.id">{{tag.title}}</g-link>
              <p class="post-meta">
                Posted by
                <g-link to="/">{{article.node.admin_user.firstname+article.node.admin_user.lasttname}}</g-link>
<!--                on September 24, 2021-->
                {{article.node.created_at}}
              </p>
            </div>
            <!-- Divider-->
            <hr class="my-4" :key="article.node.id"/>
          </template>

          <!-- Pager-->
          <div v-if="showPage" class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" :href="'/'+nextPage">Older Posts →</a></div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>

query($page:Int) {
  articles:allStrapiSArticle(perPage:2,page:$page) @paginate {
    pageInfo{
      currentPage
      totalPages
    }
    edges {
      node {
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
  }
home:allStrapiHome{
  edges{
    node{
      id
      title
      des
      cover{
        id
        url
      }
      }
    }
  }
}

</page-query>

<script>
export default {
  metaInfo: {
    title: '首页'
  },
  computed:{
    showPage(){
      return this.$page.articles.pageInfo.totalPages>1
    },
    nextPage(){
      const { currentPage, totalPages } = this.$page.articles.pageInfo
      return currentPage===totalPages?'':(currentPage+1)
    }
  }
}
</script>

<style></style>
