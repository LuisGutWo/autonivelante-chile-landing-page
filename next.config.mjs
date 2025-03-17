/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },

  env: {
    NEXT_SERVICE_ID: "service_3k8blmt",
    NEXT_TEMPLATE_ID: "template_c7njbme",

    NEXT_API_KEY: "AIzaSyC6UUiFslUqVSynZzj2aL9YFsAtCDYKP4Y",
    NEXT_AUTH_DOMAIN: "autonivelante-new-products.firebaseapp.com",
    NEXT_DATABASE_URL:
      "https://autonivelante-new-products-default-rtdb.firebaseio.com",
    NEXT_PROJECT_ID: "autonivelante-new-products",
    NEXT_STORAGE_BUCKET: "autonivelante-new-products.firebasestorage.app",
    NEXT_MESSAGING_SENDER_ID: "531588287189",
    NEXT_APP_ID: "1:531588287189:web:d447908c33a38a1949f05c",
    NEXT_HOME_PRODUCTS_URL:
      "https://autonivelante-new-products-default-rtdb.firebaseio.com/home-products/products.json",
    NEXT_MAIN_PRODUCTS_URL:
      "https://huellitas-products-default-rtdb.firebaseio.com/products.json",
    NEXT_PRODUCTS_PAGE_URL:
      "https://autonivelante-new-products-default-rtdb.firebaseio.com/main-products/products.json",
  },
};

export default nextConfig;
