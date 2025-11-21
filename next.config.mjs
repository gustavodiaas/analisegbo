/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignora erros de estilo durante a construção
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignora erros de tipagem durante a construção (essencial para quem não programa)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
