import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.d-id.com",
      },
      {
        protocol: "https",
        hostname: "taphoammo.net",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.tgdd.vn",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cloud-web-cms-beta.s3.cloud.cmctelecom.vn",
      },
      {
        protocol: "https",
        hostname: "phillip.vn",
      },
      {
        protocol: "https",
        hostname: "bochickenstore.com",
      },
      {
        protocol: "https",
        hostname: "cellphones.com.vn",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      },
      {
        protocol: "https",
        hostname: "images-eds-ssl.xboxlive.com",
      },
    ],
  },
};

export default nextConfig;
