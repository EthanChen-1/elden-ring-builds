import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bitter } from "next/font/google";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

const bitter = Bitter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elden Ring Builds",
  description: "Look up cool and unique Elden Ring builds here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
