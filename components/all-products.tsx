import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const allProducts = [
  {
    id: 1,
    slug: "free-fire-100-diamantes",
    name: "Free Fire 💎 100 Diamantes",
    price: "R$ 5,00",
    installment: "ou 12x de R$ 0,49",
    image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp",
    bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    category: "free-fire",
  },
  {
    id: 2,
    slug: "free-fire-310-diamantes",
    name: "Free Fire 💎 310 Diamantes",
    price: "R$ 15,00",
    installment: "ou 12x de R$ 1,49",
    image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp",
    bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    category: "free-fire",
  },
  {
    id: 3,
    slug: "free-fire-530-diamantes",
    name: "Free Fire 💎 530 Diamantes",
    price: "R$ 25,00",
    installment: "ou 12x de R$ 2,49",
    image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp",
    bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    category: "free-fire",
  },
  {
    id: 4,
    slug: "roblox-800-robux",
    name: "Roblox 800 Robux",
    price: "R$ 8,00",
    installment: "ou 12x de R$ 0,79",
    image: "https://wallpapercave.com/wp/wp9190657.jpg",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    category: "roblox",
  },
  {
    id: 5,
    slug: "roblox-1700-robux",
    name: "Roblox 1700 Robux",
    price: "R$ 18,00",
    installment: "ou 12x de R$ 1,79",
    image: "https://wallpapercave.com/wp/wp9190657.jpg",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    category: "roblox",
  },
  {
    id: 6,
    slug: "mobile-legends-250-diamantes",
    name: "Mobile Legends 💎 250 Diamantes",
    price: "R$ 12,00",
    installment: "ou 12x de R$ 1,19",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    category: "mobile-legends",
  },
  {
    id: 7,
    slug: "valorant-1000-vp",
    name: "Valorant Points ⚡ 1000 VP",
    price: "R$ 27,00",
    installment: "ou 12x de R$ 2,69",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
    category: "valorant",
  },
  {
    id: 8,
    slug: "fortnite-1000-vbucks",
    name: "Fortnite 1000 V-Bucks",
    price: "R$ 19,90",
    installment: "ou 12x de R$ 1,99",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-purple-500 to-blue-600",
    category: "fortnite",
  },
  {
    id: 9,
    slug: "steam-wallet-50",
    name: "Steam Wallet R$ 50",
    price: "R$ 50,00",
    installment: "ou 12x de R$ 4,99",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    category: "steam",
  },
  {
    id: 10,
    slug: "xbox-giftcard-25",
    name: "Xbox Giftcard R$ 25",
    price: "R$ 25,00",
    installment: "ou 12x de R$ 2,49",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    category: "xbox",
  },
  {
    id: 11,
    slug: "google-play-50",
    name: "Google Play R$ 50",
    price: "R$ 50,00",
    installment: "ou 12x de R$ 4,99",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-green-400 to-blue-500",
    category: "giftcards",
  },
  {
    id: 12,
    slug: "netflix-giftcard",
    name: "Netflix Giftcard",
    price: "R$ 30,00",
    installment: "ou 12x de R$ 2,99",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-red-600 to-black",
    category: "giftcards",
  },
]

export default function AllProducts() {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Todos os Produtos</h1>
          <p className="text-gray-600">Encontre todos os giftcards e recargas disponíveis em nossa loja</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${product.bgColor} h-32 flex items-center justify-center p-4`}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={120}
                  height={80}
                  className="object-contain"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

                <div className="mb-3">
                  <div className="text-lg font-bold text-gray-900 mb-1">{product.price}</div>
                  <div className="text-xs text-gray-600">{product.installment}</div>
                </div>

                <Link href={`/produto/${product.slug}`}>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 text-sm">
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
