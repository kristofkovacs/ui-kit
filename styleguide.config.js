module.exports = {
  components: 'src/components/**/*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('react-scripts-ts/config/webpack.config.dev'),
};
