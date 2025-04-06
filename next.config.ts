import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Comentado para probar sin la redirección
      /*
      {
        source: "/",
        destination: "/conversations",
        permanent: true,
      },
      */
    ];
  },
};

export default nextConfig;
