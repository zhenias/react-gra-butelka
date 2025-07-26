import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gra - butelka",
  description: "Stworzono za pomocą react :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
