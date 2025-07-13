import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script } from "next/font/google"

import "./globals.css"
import Navbar from "@/components/navbar"
import EnhancedFooter from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"


// Load Inter and Dancing Script fonts
const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
})

export const metadata: Metadata = {
  title: "APEX Consulting Group",
  description: "University of Michigan's Premier Consulting Group",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${dancingScript.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <EnhancedFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
