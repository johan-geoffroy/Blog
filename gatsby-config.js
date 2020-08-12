/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  // //title site
  // siteMetadata:{
  //   title: `Titre de mon site`,
  // },

  //init plugins config //
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
      



      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name:`johan-geoffroy dévloppeur Front-End`,
          short_name:`Développeur Front-End React.js`,
          start_url:`/`,
          background_color:`#000000`,
          display: `standalone`,
          icon:`static/favicon.ico`,
        }
      },


      {
        resolve: `gatsby-transformer-remark`,
          options: {
            plugins:[
              {
                resolve: `gatsby-remark-images`,
              }
            ]
          }
      },
      //path root pages
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/pages`,
        },
      },

      //path images
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `posts-image`,
          path: `${__dirname}/src/images/posts-images/`,
        },
      },

        //path images
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `image`,
          path: `${__dirname}/src/images/`,
        },
      },
  ]
}
