/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Necesario con varios layouts raíz (app/(es) y app/(en)): no hay un layout
    // común para componer el 404 de rutas inexistentes.
    globalNotFound: true,
  },
};

module.exports = nextConfig;
