import './globals.css'
import type { Metadata } from "next";
import { oxanium, montserrat } from '@/utils/custom-fonts';

export const metadata: Metadata = {
  title: "DEVSTAGE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className='bg-gray-900 text-gray-100 antialiased'>{children}</body>
    </html>
  );
}
