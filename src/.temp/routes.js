const c1 = () => import(/* webpackChunkName: "page--src-templates-journal-post-vue" */ "D:\\study\\gridsome\\my-gridsome\\src\\templates\\JournalPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-journal-vue" */ "D:\\study\\gridsome\\my-gridsome\\src\\pages\\Journal.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\study\\gridsome\\my-gridsome\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\study\\gridsome\\my-gridsome\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\study\\gridsome\\my-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\study\\gridsome\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/journal/:id/",
    component: c1
  },
  {
    path: "/journal/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
