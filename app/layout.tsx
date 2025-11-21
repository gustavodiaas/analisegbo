import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
// import { Toaster } from "../components/ui/toaster" <--- Comentei isso para não dar erro
import { ThemeProvider } from "./providers" // <--- Caminho certo: vizinho (.)

export const metadata: Metadata = {
  title: "Análise GBO",
  description: "Sistema de análise GBO",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <Toaster />  <--- Tirei daqui também */}
        </ThemeProvider>
      </body>
    </html>
  )
}
