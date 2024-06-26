import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/ui/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pikka Color",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
          rel="preload stylesheet"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,800,900,1000&display=swap"
          rel="preload stylesheet"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Farro:300,400,500,700&display=swap"
          rel="preload stylesheet"
          as="style"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="main-child-contianer">
          <Header />
          <div className="main-child">{children}</div>
        </div>
      </body>
    </html>
  );
}
