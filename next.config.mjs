/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            unoptimized: false,
            remotePatterns: [
                  {
                    protocol: "https",
                  hostname: "https://firebasestorage.googleapis.com/v0",
                  }
            ]
      }
      // output: "export"
};

export default nextConfig;
