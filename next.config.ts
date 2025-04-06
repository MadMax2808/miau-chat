import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://bright-kudu-849.convex.cloud/conversations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
