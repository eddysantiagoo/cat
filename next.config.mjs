/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gestordepartes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gestordepartes.com',
      },
    ],
  },
};

export default nextConfig;
