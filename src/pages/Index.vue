<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectsGrid :projects="$page.posts.edges" />
    </div>
<!--    <LatestJournals :journals="$page.journals.edges" />-->
  </Layout>
</template>

<page-query>
  query{
    posts: allStrapiFooter{
      edges {
        node{
          id
          Name
          title
          content
          Author
          Date
          Time
          colors{
            id
            color
          }
          image{
            id
            formats{
              large{
                url
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import Hero from "@/components/Hero"
import ProjectsGrid from "@/components/ProjectsGrid"
import LatestJournals from "@/components/LatestJournals"

export default {
  components: {
    Hero,
    ProjectsGrid,
    LatestJournals
  }
}
</script>
