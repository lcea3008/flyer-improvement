/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/flyer-improvement',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
