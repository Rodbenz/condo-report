/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/test_next',
  // homepage: '/test_next',
  // rewrites() {
  //   return [
  //     { source: '/test_next/_next/:path*', destination: '/_next/:path*' }
  //   ]
  // },
  // basePath: '/test_next',
  swcMinify: true,
  images: {
    unoptimized: true
  },
  env: {
    v: "1.0002",
    hostAPI: 'http://p-portal.treasury.go.th/trd-cupcake',
    // hostCondo: 'http://localhost:8093',
    // hostCondo: 'http://192.168.41.123:8093',
    hostDetail: 'https://p-portal.treasury.go.th/land/report_condo/'
  },
}

module.exports = nextConfig
