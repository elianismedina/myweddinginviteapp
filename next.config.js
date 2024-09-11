const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxa54qfxx/image/upload/**",
      },
    ],
  },
};
module.exports = nextConfig;
