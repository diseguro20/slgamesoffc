"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { Input } from "@/components/ui/input"

interface PurchasePageProps {
  slug: string
}

const getProductBySlug = (slug: string) => {
  const products = {
    roblox: {
      name: "Roblox Robux",
      description: "Robux para Roblox com entrega automática",
      image: "/images/roblox-selection.webp", // Imagem específica para Roblox
      variants: [
        { id: 1, amount: "800 Robux", price: 8.0, popular: false },
        { id: 2, amount: "1700 Robux", price: 18.0, popular: true },
        { id: 3, amount: "2000 Robux", price: 25.0, popular: false },
        { id: 4, amount: "5200 Robux", price: 40.0, popular: false },
        { id: 5, amount: "7200 Robux", price: 60.0, popular: false },
        { id: 6, amount: "10000 Robux", price: 85.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    "free-fire": {
      name: "Free Fire 💎 DIAMANTES",
      description: "Diamantes para Free Fire com entrega automática",
      image: "/images/free-fire-selection.webp", // Imagem específica para Free Fire
      variants: [
        { id: 1, amount: "100 Diamantes", price: 5.0, popular: false },
        { id: 2, amount: "310 Diamantes", price: 15.0, popular: false },
        { id: 3, amount: "530 Diamantes", price: 25.0, popular: true },
        { id: 4, amount: "1080 Diamantes", price: 40.0, popular: false },
        { id: 5, amount: "2180 Diamantes", price: 75.0, popular: false },
        { id: 6, amount: "5600 Diamantes", price: 150.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    },
    "mobile-legends": {
      name: "Mobile Legends 💎 Diamantes",
      description: "Diamantes para Mobile Legends com entrega automática",
      image: "/images/mobile-legends-selection.webp", // Imagem específica para Mobile Legends
      variants: [
        { id: 1, amount: "86 Diamantes", price: 5.0, popular: false },
        { id: 2, amount: "172 Diamantes", price: 10.0, popular: false },
        { id: 3, amount: "257 Diamantes", price: 15.0, popular: true },
        { id: 4, amount: "344 Diamantes", price: 20.0, popular: false },
        { id: 5, amount: "429 Diamantes", price: 25.0, popular: false },
        { id: 6, amount: "514 Diamantes", price: 30.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    valorant: {
      name: "Valorant Points ⚡",
      description: "Valorant Points com entrega automática",
      image: "/images/valorant-selection.webp", // Imagem específica para Valorant
      variants: [
        { id: 1, amount: "475 VP", price: 15.0, popular: false },
        { id: 2, amount: "1000 VP", price: 30.0, popular: true },
        { id: 3, amount: "1950 VP", price: 55.0, popular: false },
        { id: 4, amount: "3250 VP", price: 85.0, popular: false },
        { id: 5, amount: "5350 VP", price: 135.0, popular: false },
        { id: 6, amount: "11000 VP", price: 270.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
    },
    fortnite: {
      name: "Fortnite V-Bucks",
      description: "V-Bucks para Fortnite com entrega automática",
      image: "/placeholder.svg?height=150&width=250", // Placeholder
      variants: [
        { id: 1, amount: "1000 V-Bucks", price: 20.0, popular: false },
        { id: 2, amount: "2800 V-Bucks", price: 50.0, popular: true },
        { id: 3, amount: "5000 V-Bucks", price: 85.0, popular: false },
        { id: 4, amount: "13500 V-Bucks", price: 200.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-purple-500 to-blue-600",
    },
    steam: {
      name: "Steam Wallet",
      description: "Carteira Steam com entrega automática",
      image: "/placeholder.svg?height=150&width=250", // Placeholder
      variants: [
        { id: 1, amount: "R$ 12", price: 12.0, popular: false },
        { id: 2, amount: "R$ 30", price: 30.0, popular: true },
        { id: 3, amount: "R$ 50", price: 50.0, popular: false },
        { id: 4, amount: "R$ 100", price: 100.0, popular: false },
        { id: 5, amount: "R$ 200", price: 200.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
    },
    xbox: {
      name: "Xbox Giftcard Digital",
      description: "Giftcards Xbox para sua conta Microsoft",
      image: "/placeholder.svg?height=150&width=250", // Placeholder
      variants: [
        { id: 1, amount: "R$ 25", price: 25.0, popular: false },
        { id: 2, amount: "R$ 50", price: 50.0, popular: true },
        { id: 3, amount: "R$ 100", price: 100.0, popular: false },
        { id: 4, amount: "R$ 200", price: 200.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    },
    giftcards: {
      name: "Giftcards Digitais",
      description: "Os melhores giftcards para suas plataformas favoritas",
      image: "/placeholder.svg?height=150&width=250", // Placeholder
      variants: [
        { id: 1, amount: "Google Play R$ 30", price: 30.0, popular: false },
        { id: 2, amount: "Google Play R$ 50", price: 50.0, popular: true },
        { id: 3, amount: "Netflix R$ 30", price: 30.0, popular: false },
        { id: 4, amount: "Spotify R$ 20", price: 20.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-green-400 to-blue-500",
    },
    "brawl-stars": {
      name: "Gemas Brawl Stars",
      description: "Gemas para Brawl Stars com entrega automática",
      image: "/images/brawl-stars-selection.webp", // Imagem específica para Brawl Stars
      variants: [
        { id: 1, amount: "80 Gemas", price: 5.0, popular: false },
        { id: 2, amount: "170 Gemas", price: 10.0, popular: true },
        { id: 3, amount: "360 Gemas", price: 20.0, popular: false },
        { id: 4, amount: "950 Gemas", price: 50.0, popular: false },
        { id: 5, amount: "2000 Gemas", price: 100.0, popular: false },
      ],
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  }

  return products[slug as keyof typeof products] || products["roblox"]
}

export default function PurchasePage({ slug }: PurchasePageProps) {
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState<any>(
    product.variants.find((v) => v.popular) || product.variants[0],
  )
  const [username, setUsername] = useState("")

  const REVIEWS_PER_PAGE = 3 // Define quantas avaliações por página
  const [currentPage, setCurrentPage] = useState(1) // Estado para a página atual das avaliações

  const handlePurchase = (variant: any) => {
    setSelectedVariant(variant)
    if (product.name === "Roblox Robux") {
      if (variant.amount === "800 Robux") {
        window.location.href = "https://go.pepperpay.com.br/o7zm0"
        return // Impede o scroll automático se redirecionar
      } else if (variant.amount === "1700 Robux") {
        window.location.href = "https://go.pepperpay.com.br/kiafk"
        return // Impede o scroll automático se redirecionar
      } else if (variant.amount === "2000 Robux") {
        window.location.href = "https://go.pepperpay.com.br/ezywt"
        return // Impede o scroll automático se redirecionar
      } else if (variant.amount === "5200 Robux") {
        window.location.href = "https://go.pepperpay.com.br/c8sai"
        return // Impede o scroll automático se redirecionar
      } else if (variant.amount === "7200 Robux") {
        window.location.href = "https://go.pepperpay.com.br/z4sb3"
        return // Impede o scroll automático se redirecionar
      } else if (variant.amount === "10000 Robux") {
        // Nova condição para 10000 Robux
        window.location.href = "https://go.pepperpay.com.br/ivlpc"
        return // Impede o scroll automático se redirecionar
      }
    }
    // Se não for um dos casos acima, você pode adicionar um comportamento padrão aqui,
    // como um alerta ou redirecionamento genérico, se desejar.
    // Por exemplo: alert(`Redirecionando para a compra de ${variant.amount} de ${product.name}`);
  }

  const allCustomerReviews = [
    {
      name: "Carlos",
      verified: true,
      rating: 5,
      comment: "Excelente serviço! Recebi minha recarga em menos de 2 minutos. Super recomendo, é confiável e rápido.",
      date: "2 horas atrás",
    },
    {
      name: "Ana Paula",
      verified: true,
      rating: 4,
      comment:
        "Muito bom! Comprei diamantes para Free Fire e chegou rapidinho. Preço justo e entrega imediata como prometido.",
      date: "1 dia atrás",
    },
    {
      name: "João Silva",
      verified: true,
      rating: 5,
      comment:
        "Perfeito! Já é a terceira vez que compro aqui. Sempre funciona certinho, entrega na hora e suporte muito bom.",
      date: "3 dias atrás",
    },
    {
      name: "Mariana",
      verified: true,
      rating: 4,
      comment:
        "Ótima experiência! Pagamento pelo PIX foi super fácil e recebi o código instantaneamente. Site confiável.",
      date: "5 dias atrás",
    },
    {
      name: "Pedro",
      verified: true,
      rating: 5,
      comment:
        "Top demais! Comprei Robux e funcionou perfeitamente. Preço melhor que outros sites e entrega automática.",
      date: "1 semana atrás",
    },
    {
      name: "Fernanda",
      verified: true,
      rating: 4,
      comment: "Muito satisfeita com a compra. Processo simples, pagamento seguro e recebi tudo certinho. Recomendo!",
      date: "1 semana atrás",
    },
  ]

  const totalPages = Math.ceil(allCustomerReviews.length / REVIEWS_PER_PAGE)
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE
  const endIndex = startIndex + REVIEWS_PER_PAGE
  const currentReviews = allCustomerReviews.slice(startIndex, endIndex)

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-orange-500">
            Página inicial
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Product Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <div className="mt-6 mb-8 w-full max-w-md mx-auto">
            <label htmlFor="username-input" className="block text-lg font-semibold text-gray-800 mb-2 text-left">
              Informe seu ID de Usuário / Nick:
            </label>
            <Input
              id="username-input"
              type="text"
              placeholder="Ex: SeuNickNoJogo ou ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
            />
          </div>
        </div>

        {/* Product Variants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {product.variants.map((variant) => (
            <div
              key={variant.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                variant.popular ? "ring-2 ring-orange-500" : ""
              }`}
            >
              {variant.popular && (
                <div className="bg-orange-500 text-white text-center py-1 text-sm font-semibold">MAIS POPULAR</div>
              )}

              <div className="p-6 text-center">
                <div className={`${product.bgColor} h-32 rounded-lg mb-4 flex items-center justify-center`}>
                  <Image
                    src={product.image || "/placeholder.svg"} // Agora puxa a imagem do objeto do produto
                    alt={variant.amount}
                    width={120}
                    height={80}
                    className="object-contain"
                    unoptimized
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{variant.amount}</h3>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    R$ {variant.price.toFixed(2).replace(".", ",")}
                  </div>
                  <div className="text-sm text-gray-600">
                    ou 12x de R$ {(variant.price / 12).toFixed(2).replace(".", ",")}
                  </div>
                </div>

                <Button
                  onClick={() => handlePurchase(variant)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 flex items-center justify-center gap-2"
                  disabled={!username}
                >
                  COMPRAR
                  <Image
                    src="/images/icone_robux-removebg-preview.webp"
                    alt="Robux Icon"
                    width={20}
                    height={20}
                    className="object-contain"
                    unoptimized
                  />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Avaliações dos Clientes</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rating Summary */}
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-500 mb-2">4.5</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">De 156 avaliações</div>

              {/* Rating Breakdown */}
              <div className="mt-4 space-y-1">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center text-sm">
                    <span className="w-2">{rating}</span>
                    <Star className="w-3 h-3 text-yellow-400 mx-1" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{
                          width:
                            rating === 5
                              ? "65%"
                              : rating === 4
                                ? "30%"
                                : rating === 3
                                  ? "3%"
                                  : rating === 2
                                    ? "1%"
                                    : rating === 1
                                      ? "1%"
                                      : "0%",
                        }}
                      ></div>
                    </div>
                    <span className="w-8 text-right">
                      {rating === 5 ? "78" : rating === 4 ? "36" : rating === 3 ? "4" : rating === 2 ? "2" : "1"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                {currentReviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium">{review.name}</span>
                      {review.verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verificado ✓</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <Button
                      key={pageNumber}
                      variant={currentPage === pageNumber ? "default" : "outline"}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={currentPage === pageNumber ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
                    >
                      {pageNumber}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
