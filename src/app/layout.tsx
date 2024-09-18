import type { Metadata } from "next";

import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

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
      <body className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-300 via-primary-400 to-primary-500">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
