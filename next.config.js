/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/condo-report',
  // rewrites() {
  //   return [
  //     { source: '/_cuttom/_next/:path*', destination: '/_next/:path*' }
  //   ]
  // },
  swcMinify: true,
  images: {
    unoptimized: true
  },
  env: {
    v: "1.0002",
    hostAPI: 'http://192.168.41.123:8094',
    // hostCondo: 'http://localhost:8093',
    hostCondo: 'http://192.168.41.123:8093',
    hostDetail: '192.168.41.14/CONDO'
  },
}

module.exports = nextConfig
