/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 温暖的志愿者主题色彩
        volunteer: {
          primary: '#FF6B35',    // 温暖的橙色
          secondary: '#F7931E',  // 阳光黄色
          accent: '#4ECDC4',     // 清新的青绿色
          warm: '#FFE66D',       // 温暖的黄色
          light: '#FFEAA7',      // 浅黄色
          heart: '#FF7675',      // 爱心红色
          green: '#00B894',      // 希望绿色
        },
      },
      fontFamily: {
        'warm': ['"Noto Sans SC"', 'sans-serif'],
        'display': ['"ZCOOL XiaoWei"', 'serif'],
      },
      animation: {
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'warm-glow': 'warmGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        heartbeat: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1.05)' },
        },
        warmGlow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
