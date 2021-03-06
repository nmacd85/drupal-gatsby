module.exports = {
  siteMetadata: {
    title: 'Nicole Dawn Design',
    baseUrl: 'http://nicoledawn.design/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'http://nicoledawn.design/',
        apiBase: 'jsonapi', // endpoint of Drupal server
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `rocksalt`,
          `raleway\:400`,
          `pacifico`
        ]
      }
    }
  ],
}
