module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './App/**/*.{js,ts}', // Adicione esta linha para incluir arquivos do diretório App/
    '../App/templates/**/*.html' // Caminho relativo para templates Flask
  ],
  theme: {
    extend: {
      colors: {
        // Paleta no estilo macOS (light/dark)
        gray: {
          'ios-light': '#F2F2F7', // Fundo claro
          'ios-border': '#D1D1D6', // Bordas
          'ios-text': '#1C1C1E',   // Texto escuro
          'ios-dark': '#1C1C1E',    // Fundo dark mode
          'ios-card': '#FFFFFF',    // Cards
        },
        orange: {
          'ios': '#FF9500',         // Botões/acentos
          'ios-dark': '#FF9F0A'     // Dark mode
        }
      },
      boxShadow: {
        'ios': '0 4px 20px rgba(0, 0, 0, 0.08)', // Sombra suave
        'ios-button': '0 2px 10px rgba(255, 149, 0, 0.25)'
      },
      borderRadius: {
        'ios': '12px',             // Bordas arredondadas típicas
        'ios-button': '10px'
      }
    },
  },
  plugins: [],
  darkMode: 'class' // Habilita dark mode via classe CSS
}