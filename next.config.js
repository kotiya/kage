import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default {
  // for webpack-bundle-analyzer
  // https://github.com/zeit/next.js/blob/063db7099cf38a22f5a935839e3023ad83fcf2a3/examples/with-webpack-bundle-analyzer/next.config.js
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }
    return config;
  },

  // for static site export
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/password-reset": { page: "/password-reset" },
      "/password-reset-sent": { page: "/password-reset-sent" },
      "/users": { page: "/users" },
      "/users/edit": { page: "/users/edit" }
    };
  }
};
