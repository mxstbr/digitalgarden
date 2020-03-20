module.exports = {
  siteMetadata: {
    title: `Max Stoiber (@mxstbr)`,
    description: ``,
    author: `@mxstbr`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        basePath: `/thoughts`,
        contentPath: `content/thoughts`,
      },
    },
  ],
}
