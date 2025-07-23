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
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        <script>
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1440391710625809');fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=1440391710625809&ev=PageView&noscript=1"/>`}
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  )
}
