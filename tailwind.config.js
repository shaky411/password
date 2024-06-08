import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'shipcove': {
          '50': '#f3f8fa',
          '100': '#e9f1f6',
          '200': '#d7e4ee',
          '300': '#bed2e3',
          '400': '#a3bbd6',
          '500': '#8ca3c8',
          '600': '#6f85b5',
          '700': '#6274a0',
          '800': '#516082',
          '900': '#465269',
          '950': '#292f3d',
      },
      'laurel': {
        '50': '#f2f7f3',
        '100': '#e0ebe1',
        '200': '#c3d7c7',
        '300': '#9abba2',
        '400': '#699575',
        '500': '#4e7b5c',
        '600': '#3a6147',
        '700': '#2e4e39',
        '800': '#273e30',
        '900': '#203428',
        '950': '#111d16',
    },
    'ultramarine': {
      '50': '#f2f5ff',
      '100': '#e7eaff',
      '200': '#d2daff',
      '300': '#adb8ff',
      '400': '#7f8aff',
      '500': '#4b50ff',
      '600': '#2b27ff',
      '700': '#1e15ec',
      '800': '#1811c6',
      '900': '#1610a1',
      '950': '#07076e',
  },
  'burnt': {
    '50': '#fcf6f0',
    '100': '#f8eadc',
    '200': '#f1d2b7',
    '300': '#e7b38a',
    '400': '#dd8b5a',
    '500': '#d56d3a',
    '600': '#c7572f',
    '700': '#a54429',
    '800': '#833727',
    '900': '#6b3023',
    '950': '#3a1610',
},
'gull': {
  '50': '#f4f8f9',
  '100': '#ebf2f4',
  '200': '#dbe6ea',
  '300': '#c5d5dc',
  '400': '#acc0cd',
  '500': '#9bafc0',
  '600': '#8094ab',
  '700': '#6d7f95',
  '800': '#5a6879',
  '900': '#4c5763',
  '950': '#2c323a',
}    
      },
    },
  },
  plugins: [
    nextui(),
  ],
}


export default config;
