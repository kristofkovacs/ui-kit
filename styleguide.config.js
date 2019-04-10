const path = require('path');

module.exports = {
  pagePerSection: false,
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    { name: 'Simple Components', components: 'src/components/simple/**/*.tsx' },
    { name: 'Complex Components', components: 'src/components/complex/**/*.tsx' },
  ],
  skipComponentsWithoutExample: true,
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
