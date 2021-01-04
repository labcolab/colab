const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.[tj]sx?$/,
      loader: [
        require.resolve('@open-wc/webpack-import-meta-loader'),
        require.resolve(
          '@snowpack/plugin-webpack/plugins/proxy-import-resolve',
        ),
      ],
    });

    config.plugins.push(new Dotenv(), new webpack.EnvironmentPlugin());

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
