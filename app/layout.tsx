import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Khan Jariff Al Naseeb | Elite Solo Engineer & Founder",
  description: "Founder & Lead Engineer @ Glitched Technologies. Building systems that evolve. Engineering the future through elegant code. Available for projects and collaborations.",
  keywords: [
    "Khan Jariff Al Naseeb",
    "Software Engineer",
    "Full Stack Developer",
    "Glitched Technologies",
    "Web Development",
    "System Architecture",
    "Bangladesh Developer",
    "Tech Founder",
    "Engineering",
    "Software Development"
  ],
  authors: [{ name: "Khan Jariff Al Naseeb" }],
  creator: "Khan Jariff Al Naseeb",
  publisher: "Khan Jariff Al Naseeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://khanjariff.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khan Jariff Al Naseeb | Elite Solo Engineer & Founder",
    description: "Founder & Lead Engineer @ Glitched Technologies. Building systems that evolve. Engineering the future through elegant code.",
    url: "https://khanjariff.com",
    siteName: "Khan Jariff Al Naseeb",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Jariff Al Naseeb - Elite Solo Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Jariff Al Naseeb | Elite Solo Engineer & Founder",
    description: "Founder & Lead Engineer @ Glitched Technologies. Building systems that evolve.",
    creator: "@khan_jariff",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-light-32x32.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://khanjariff.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
