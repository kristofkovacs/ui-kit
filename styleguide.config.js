const path = require('path');

module.exports = {
  components: 'src/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/ThemeWrapper'),
  },
  template: {
    head: {
      links: [{
        href: 'https://fonts.googleapis.com/css?family=Montserrat',
        rel: 'stylesheet'
      }]
    }
  },
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
};