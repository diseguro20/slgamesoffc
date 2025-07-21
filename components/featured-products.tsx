import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    slug: "free-fire-diamantes",
    name: "Free Fire 💎 DIAMANTES",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp", // ← Sua imagem aqui
    bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    id: 2,
    slug: "roblox-gift-card",
    name: "Roblox Gift Card Digital – Entrega Imediata!",
    price: "R$ 8,00",
    installment: "ou 12x de R$ 0,79",
    // alterado: agora usa imagem local
    image: "/images/nova-imagem-roblox.png",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
  },
  {
    id: 3,
    slug: "mobile-legends-diamantes",
    name: "Mobile Legends 💎 Diamantes",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/mobile-legends-logo.png",
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
  },
  {
    id: 4,
    slug: "call-of-duty-cod-points",
    name: "Call of Duty 🔫 COD POINTS",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/call-of-duty-logo.png",
    bgColor: "bg-gradient-to-br from-gray-700 to-black",
  },
  {
    id: 5,
    slug: "playstation-store",
    name: "Playstation Store",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/playstation-logo.png",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
  {
    id: 6,
    slug: "valorant-points",
    name: "Valorant Points⚡",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/valorant-logo.png",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
  },
  {
    id: 7,
    slug: "wildrift-wildcores",
    name: "Wildrift - Wildcores",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/wildrift-logo.png",
    bgColor: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },
  {
    id: 8,
    slug: "gemas-brawl-stars",
    name: "Gemas Brawl Stars",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/brawl-stars-logo.png",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    id: 9,
    slug: "steam",
    name: "STEAM",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/steam-logo.png",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 10,
    slug: "league-of-legends",
    name: "League of Legends - Riot Points",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/league-of-legends-logo.png",
    bgColor: "bg-gradient-to-br from-blue-600 to-yellow-500",
  },
  {
    id: 11,
    slug: "xbox-giftcard",
    name: "XBOX - Giftcard Digital",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/xbox-logo.png",
    bgColor: "bg-gradient-to-br from-green-500 to-green-700",
  },
  {
    id: 12,
    slug: "google-play",
    name: "Google Play - Gift Card Digital",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/images/google-play-logo.png",
    bgColor: "bg-gradient-to-br from-green-400 to-blue-500",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Nossos Produtos</h2>
          <Link href="/produtos" className="text-orange-500 hover:text-orange-600 font-medium">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className={`${product.bgColor} h-32 flex items-center justify-center p-4`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={120}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

                <div className="mb-3">
                  <div className="text-lg font-bold text-gray-900 mb-1">{product.price}</div>
                  <div className="text-xs text-gray-600">{product.installment}</div>
                </div>

                <Link href={`/produto/${product.slug}`}>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 text-sm">
                    COMPRAR
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
