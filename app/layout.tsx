import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kim The Dog Trainer",
  description: "Professional dog training services – group, private obedience, puppy training, behavior modification and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
