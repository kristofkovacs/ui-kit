const path = require('path');

module.exports = {
  components: 'src/components/**/*.tsx',
  pagePerSection: true,
  propsParser: require('react-docgen-typescript').parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/ThemeWrapper'),
  },
  template: {
    head: {
      links: [
        {
          href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800',
          rel: 'stylesheet',
        },
      ],
    },
  },
  theme: {
    color: {
      link: 'firebrick',
      linkHover: 'salmon',
    },
    fontFamily: {
      base: '"Montserrat", "sans"',
    },
  },

  webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
};
