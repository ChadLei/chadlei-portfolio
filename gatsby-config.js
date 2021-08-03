const config = require('./src/config');
const theme = require('./src/styles/Theme')

// Tutorial for implementing google analytics
// https://javascript.plainenglish.io/how-to-connect-your-gatsby-js-landing-page-to-google-analytics-and-deploy-to-netlify-step-by-step-8352467583df
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      // Maybe ditch this and fetch manually instead: https://blog.larsbehrenberg.com/use-javascripts-fetch-api-with-asyncawait-to-fetch-your-instagram-feed-in-react
      // Repo: https://github.com/LarsBehrenberg/gatsby-instagram-feed/blob/master/src/components/instagram.js
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        // 181927428
        username: "181927428",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteShortTitle,
        start_url: `/`,
        background_color: theme.colors.background,
        theme_color: theme.colors.primary,
        display: `minimal-ui`,
        icon: config.siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `content`,
      },
    },
  ],
}
