/* eslint-env node */
module.exports = {
  plugins: {
    tailwindcss: {}, // Procesa TailwindCSS
    autoprefixer: {}, // Agrega prefijos de navegadores
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // Minifica en producción
  },
};