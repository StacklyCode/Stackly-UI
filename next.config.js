/* eslint-disable @typescript-eslint/no-var-requires */
const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = {};
const withReactSvg = require("next-react-svg");
const path = require("path");

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/assets/icons"),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  pwa: {
    dest: "public",
  },
});
