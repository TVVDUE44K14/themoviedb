const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["www.themoviedb.org"],
  },
};

module.exports = nextConfig;
