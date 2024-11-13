/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/orders",
        destination: "/orders/list",
      },
    ];
  },
};

export default nextConfig;
