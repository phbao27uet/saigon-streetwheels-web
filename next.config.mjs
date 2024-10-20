/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    if (config.name === 'server') config.optimization.concatenateModules = false;
    return config;
  },
  reactStrictMode: true,
  compress: true,

  output: 'standalone',
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        hostname: 'yourbestpartner.eu',
      },
    ],
  },
};
export default nextConfig;
