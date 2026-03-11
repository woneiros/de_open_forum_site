import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async redirects() {
    return [
      {
        source: "/rsvp",
        destination: "https://luma.com/deof2026",
        permanent: true,
      },
      {
        source: "/email-list",
        destination: "https://groups.google.com/g/data-engineering-open-forum",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
