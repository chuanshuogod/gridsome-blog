// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '阿库西斯',
  siteDescription: '大统领',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post','footer'],
        // typeName:'Strapi',
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiFooter: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
}
