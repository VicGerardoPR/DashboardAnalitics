import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analytics Dashboard - Real-time Metrics",
  description: "Real-time analytics dashboard with live metrics and KPIs monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
