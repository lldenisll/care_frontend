// This configuration file is not used anywhere in the code, it's a hack to handle InteliJ relative path imports
// Keep in sync with actual webpack aliases

const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/care_frontend/'
    : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};
