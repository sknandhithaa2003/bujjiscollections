import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"],variable: "--font-playfair",display: "swap",})
const inter = Inter({ subsets: ["latin"], variable: "--font-inter",display: "swap",})
export const metadata: Metadata = { title: "Bujji's Collection", icons: { icon: "/favicon.jpg", }}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
return (
  <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
  <body className="font-sans antialiased">
    <Suspense fallback={null}>{children}</Suspense>
  </body>
  </html>
  )
}