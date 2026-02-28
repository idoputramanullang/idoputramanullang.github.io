import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Fullstack Developer",
  description:
    "Fullstack Developer | Program Manager Rehabilitasi Narkoba Mutiara Abadi Binjai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}