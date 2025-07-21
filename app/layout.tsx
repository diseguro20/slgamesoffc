import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SLGAMES - Recarga para Jogos | Giftcards e Diamantes",
  description:
    "SLGAMES - A melhor loja de recargas para jogos. Free Fire, Roblox, Mobile Legends, Valorant e muito mais. Entrega imediata e preços promocionais.",
  keywords: "slgames, recarga jogos, free fire diamantes, roblox, mobile legends, valorant, giftcard",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
