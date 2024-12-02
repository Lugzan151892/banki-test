const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/banki-test/" : "/",
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg)$/,
          type: "asset/resource",
        },
      ],
    },
  },
});
