import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PayVerify - Pay with confidence. Verify with trust.",
  description:
    "Merchant-layer payment validation for Nigeria. Stop staff payment diversion with verified QR codes tied to official bank accounts. Verify before you pay.",
  keywords: [
    "payment verification",
    "Nigeria",
    "QR code payments",
    "staff fraud prevention",
    "fintech",
    "merchant validation",
    "POS fraud",
    "payment diversion",
  ],
  openGraph: {
    title: "PayVerify - Merchant Payment Validation for Nigeria",
    description:
      "Stop staff payment diversion with verified QR codes. Merchant-layer validation that ensures every payment reaches the right account.",
    url: "https://payverify.ng",
    siteName: "PayVerify",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
