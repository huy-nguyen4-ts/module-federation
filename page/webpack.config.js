const { ModuleFederationPlugin } = require("webpack").container;
const { LimitChunkCountPlugin } = require("webpack").optimize;
const { dependencies } = require("./package.json");

module.exports = {
  output: {
    publicPath: "auto",
    scriptType: "text/javascript",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new ModuleFederationPlugin({
      name: "page",
      filename: "remoteEntry.js",
      exposes: {
        "./loadApp": "./src/loadApp.ts",
      },
    }),
  ],
};
