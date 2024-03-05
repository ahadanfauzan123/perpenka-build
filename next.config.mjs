import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            unoptimized: true,
            // remotePatterns: [
            //       {
            //         protocol: "https",
            //       hostname: "firebasestorage.googleapis.com/v0",
            //       }
            // ]
      }
      // output: "export"
};

export default withNextVideo(nextConfig);