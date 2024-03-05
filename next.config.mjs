/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            unoptimized: false,
            remotePatterns: [
                  {
                    protocol: "https",
                  hostname: ["https://firebasestorage.googleapis.com/v0", "images.unsplash.com"]
                  }
            ]
      }
      // output: "export"
};

export default nextConfig;
