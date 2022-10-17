module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: true,
      },
    ];
  },
};
