/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Silence Chrome DevTools probe — return an empty JSON object
      {
        source: '/.well-known/appspecific/com.chrome.devtools.json',
        destination: '/api/devtools-stub',
      },
    ];
  },
};

module.exports = nextConfig;
