"use client";

import { SessionProvider } from "next-auth/react";

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <Header />

        <SessionProvider>{children}</SessionProvider>

        <Footer />
      </body>
    </html>
  );
}
