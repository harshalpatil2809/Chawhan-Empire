import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#101418', soft: '#1B2127', mute: '#3A4550' },
        concrete: { DEFAULT: '#E7E5E1', dark: '#CFCCC5' },
        paper: '#FAF9F7',
        steel: { DEFAULT: '#1F4E5F', dark: '#163A47', light: '#2E6E85' },
        signal: '#F2B705'
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,20,24,.04), 0 8px 24px -12px rgba(16,20,24,.18)'
      },
      maxWidth: { shell: '1200px' }
    }
  },
  plugins: []
};
export default config;
