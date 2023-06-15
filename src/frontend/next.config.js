/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "media.formula1.com",
      "grandprix20.files.wordpress.com",
      "upload.wikimedia.org",
      "w7.pngwing.com",
    ],
  },
}

module.exports = nextConfig
