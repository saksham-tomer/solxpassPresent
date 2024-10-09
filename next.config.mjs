/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignoring all errors
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
