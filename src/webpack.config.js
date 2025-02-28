const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      process: require.resolve('process/browser')
    }
  },
  // You can add other Webpack configurations here, such as entry, output, etc.
};
