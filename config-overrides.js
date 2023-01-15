const { override, addWebpackPlugin } = require('customize-cra');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new CopyWebpackPlugin({
      patterns: [
        { from: 'build', to: 'public' },
      ],
    }),
  ),
);
