import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "پروژه اهراز هویت دکاموند",
  description: "this is a demo project for authentication in nextjs and typescript",
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
