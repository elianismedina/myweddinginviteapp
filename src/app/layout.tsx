import type { Metadata } from "next";

import "./globals.css";

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
      <body className=" bg-primary-500">{children}</body>
    </html>
  );
}
