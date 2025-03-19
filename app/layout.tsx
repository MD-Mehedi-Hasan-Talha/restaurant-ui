import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from "next/font/google";
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'JavaScript Blog',
  description: 'Master JavaScript Series - Learn JavaScript in depth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${fontSans.variable}`}>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}