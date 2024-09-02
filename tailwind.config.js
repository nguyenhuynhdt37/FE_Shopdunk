/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        item: '2px 1px 28px 0px rgb(0 0 0 / 12%)',
        item_non_hover: '0px 1px 8px rgba(0, 0, 0, 0.04)',
        button_color: 'inset 1px 1px 2px rgb(0 0 0 / 10%);',
      },
      colors: {
        primary1: '#0066CC',
        red: '#ff3b30',
        black: '#000000',
        white: '#ffffff',
        gold: '#ffe5bf',
        silver: '#e5e5ea',
        spaceGray: '#636366',
        jetBlack: '#111112',
        roseGold: '#f1c9cb',
        yellow: '#ffcc00',
        green: '#32cd32',
        blue: '#007aff',
        purple: '#bf5af2',
        midnight: '#121212',
        starlight: '#f6f6f6',
        pink: '#ffc0cb',
        midnightGreen: '#114422',
        sierraBlue: '#a4c1d9',
        graphite: '#545458',
        alpineGreen: '#668866',
        naturalTitanium: '#d2d2d7',
        blueTitanium: '#49668c',
        whiteTitanium: '#f2f2f7',
        textcolor: '#515154',
        backgroudDefault: '#f5f5f7',
        bgHeader: '#515154',
        bgHeaderHover: '#626265',
        textHeader: '#d2d2d7',
        darkGreen: '#009914',
      },
      spacing: {
        4.5: '2rem',
      },
      fontSize: {
        '2.5xl': '1.8rem',
        '1.5xl': '1.4rem',
        '1.7xl': '1.4rem',
        '10xl': '10rem',
      },
      borderWidth: {
        1: '1px',
      },
      padding: {
        'reduce-2': '2px',
        4.5: '1.5rem',
        3.5: '0.8rem',
        24.5: '4.3rem',
      },
      width: {
        43: '10rem',
      },
      height: {
        42: '9.1rem',
      },
      lineHeight: {
        11: '3.2rem',
      },
    },
  },
  plugins: [],
}
