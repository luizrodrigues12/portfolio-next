import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Providers from "@/components/layout/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luiz Rodrigues",
  description: "Desenvolvedor FrontEnd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
