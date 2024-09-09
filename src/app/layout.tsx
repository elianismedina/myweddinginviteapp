import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfairDisplay = localFont({
  src: "../app/fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair-display",
  weight: "400 700",
});
const playfairDisplayBold = localFont({
  src: "../app/fonts/PlayfairDisplay-Bold.woff",
  variable: "--font-playfair-display-bold",
  weight: "700",
});

export const metadata: Metadata = {
  title: "My wedding invite",
  description: "Carlos & Elizabeth wedding invite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-col">
      <body
        className={`${playfairDisplay.variable} ${playfairDisplayBold.variable} antialiased bg-primary-500`}
      >
        {children}
      </body>
    </html>
  );
}
