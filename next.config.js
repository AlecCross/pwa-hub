// next.config.js
const { GenerateSW } = require('workbox-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer && isProd) {
      config.plugins.push(
        new GenerateSW({
          swDest: 'public/service-worker.js',
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /\/apps-icons\/.*\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'http-cache',
              },
            },
          ],
        })
      );
    }

    return config;
  },
};
