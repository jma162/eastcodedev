import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.eastcodedev.com',
          },
        ],
        destination: 'https://eastcodedev.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
