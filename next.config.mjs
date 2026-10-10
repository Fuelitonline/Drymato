// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   reactCompiler: true,
//   experimental: {
//     optimizePackageImports: ['react-icons', 'lucide-react'],
//   }
// };

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  }
};

export default nextConfig;
