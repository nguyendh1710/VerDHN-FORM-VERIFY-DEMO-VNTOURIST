import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // ✅ bao trùm chung
    './src/modules/Mail/**/*.{js,ts,jsx,tsx}', // ✅ thêm: nơi chứa VerifyEmail.tsx
  ],
  theme: {
    extend: {
      colors: {
        'primary-600': '#6C47FF',
        'primary-700': '#5639CC',
        'primary-50': '#F4F2FF',
        'success-700': '#027A48',
        'success-50': '#ECFDF3',
      },
    },
  },
  plugins: [],
};
export default config;
