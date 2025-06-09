const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            brand: "#2B4B38", // your custom green color
          },
          fontFamily: {
            baker: ['var(--font-geist-mono)'],
          },
        },
      },
    }
  },
};

export default config;
