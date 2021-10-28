const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['react-icons']);

module.exports = withPlugins([withTM], {
  images: {
    domains: ['photocloud.mobilelab.vn', 'lh3.googleusercontent.com', 'storage.opensea.io', 'i.stack.imgur.com', 'storage.googleapis.com','public.nftstatic.com', 'mockupgenerator.ap-south-1.linodeobjects.com', 's3-us-west-2.amazonaws.com'],
  },
  eslint: {
    dirs: ['pages'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  reactStrictMode: true,
})
