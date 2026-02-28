import localFont from 'next/font/local';

// Titan One hanya untuk judul/header
export const titanOne = localFont({
  src: '../../public/fonts/TitanOne-Regular.ttf', // path relatif ke public folder
  variable: '--font-titanone',
  display: 'swap',
});