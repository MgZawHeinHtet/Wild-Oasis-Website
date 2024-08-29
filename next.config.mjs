/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
     unoptimized: true ,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ujsbsmjzetuclarhmrgl.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  
};

export default nextConfig;
