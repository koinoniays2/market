import "./globals.css";
import localFont from 'next/font/local'

const font = localFont({
  src:[
    {
      path: '../../public/fonts/중나좋체Light.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/중나좋체Medium.ttf',
      weight: '700'
    },
  ]
})


export const metadata = {
  title: "Street Market",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
