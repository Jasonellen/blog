<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead"
            :style="{
              backgroundImage:`url(http://113.31.154.207:1337${$page.home.edges[0].node.cover.url})`
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
          <template v-for="article in $page.tag.s_articles">
            <!-- Post preview-->
            <div class="post-preview" :key="article.id">
              <g-link :to="'/s-article/'+article.id">
                <h2 class="post-title">{{article.title}}</h2>
<!--                <h3 class="post-subtitle">{{article.node.content}}</h3>-->
              </g-link>
            </div>
            <!-- Divider-->
            <hr class="my-4" :key="article.id"/>
          </template>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query($id:ID!) {
  tag:strapiTag(id:$id) {
    id
    title
    s_articles{
      id
      title
      content
      created_at
      cover{
        id
        url
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

  }
}
</script>

<style></style>
