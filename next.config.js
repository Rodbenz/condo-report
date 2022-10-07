/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  swcMinify: true,
  experimental: {
    esmExternals: 'loose'
  },
  nextConfig,
  // images: {
  //   domains: ['areamanage.exat.co.th']
  // },
  env: {
    v : "1.0002" ,
    hostAPI: 'http://192.168.41.123:8094',
    // hostTest: 'http://localhost:8093',
    hostTest: 'http://192.168.41.123:8093',
    hostDetail: '192.168.41.14/CONDO'
  }
}