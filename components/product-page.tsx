"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Plus, Minus, Shield, Zap, Clock, Diamond } from "lucide-react"

interface ProductPageProps {
  slug: string
}

const getProductBySlug = (slug: string) => {
  const products = {
    "free-fire-100-diamantes": {
      name: "Free Fire 💎 100 Diamantes - Entrega Imediata!",
      description: "100 Diamantes para Free Fire com entrega automática",
      image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp",
      category: "Free Fire",
      rating: 4.5,
      reviews: 156,
      originalPrice: 10.0,
      price: 5.0,
      discount: "50% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "100 Diamantes", price: 5.0, popular: false },
        { id: 2, amount: "310 Diamantes", price: 15.0, popular: false },
        { id: 3, amount: "530 Diamantes", price: 25.0, popular: true },
        { id: 4, amount: "1080 Diamantes", price: 40.0, popular: false },
        { id: 5, amount: "2180 Diamantes", price: 75.0, popular: false },
        { id: 6, amount: "5600 Diamantes", price: 150.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "free-fire-310-diamantes": {
      name: "Free Fire 💎 310 Diamantes - Entrega Imediata!",
      description: "310 Diamantes para Free Fire com entrega automática",
      image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp",
      category: "Free Fire",
      rating: 4.5,
      reviews: 156,
      originalPrice: 20.0,
      price: 15.0,
      discount: "25% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "100 Diamantes", price: 5.0, popular: false },
        { id: 2, amount: "310 Diamantes", price: 15.0, popular: false },
        { id: 3, amount: "530 Diamantes", price: 25.0, popular: true },
        { id: 4, amount: "1080 Diamantes", price: 40.0, popular: false },
        { id: 5, amount: "2180 Diamantes", price: 75.0, popular: false },
        { id: 6, amount: "5600 Diamantes", price: 150.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "free-fire-530-diamantes": {
      name: "Free Fire 💎 530 Diamantes - Entrega Imediata!",
      description: "530 Diamantes para Free Fire com entrega automática",
      image: "https://www.cenariomt.com.br/wp-content/uploads/2024/02/diamantes-free-fire.webp",
      category: "Free Fire",
      rating: 4.5,
      reviews: 156,
      originalPrice: 35.0,
      price: 25.0,
      discount: "30% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "100 Diamantes", price: 5.0, popular: false },
        { id: 2, amount: "310 Diamantes", price: 15.0, popular: false },
        { id: 3, amount: "530 Diamantes", price: 25.0, popular: true },
        { id: 4, amount: "1080 Diamantes", price: 40.0, popular: false },
        { id: 5, amount: "2180 Diamantes", price: 75.0, popular: false },
        { id: 6, amount: "5600 Diamantes", price: 150.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "roblox-800-robux": {
      name: "Roblox 800 Robux - Entrega Imediata!",
      description: "800 Robux para Roblox com entrega automática",
      image: "https://wallpapercave.com/wp/wp9190657.jpg",
      category: "Roblox",
      rating: 4.4,
      reviews: 121,
      originalPrice: 12.0,
      price: 8.0,
      discount: "33% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "800 Robux", price: 8.0, popular: false },
        { id: 2, amount: "1700 Robux", price: 18.0, popular: true },
        { id: 3, amount: "2000 Robux", price: 25.0, popular: false },
        { id: 4, amount: "5200 Robux", price: 40.0, popular: false },
        { id: 5, amount: "7200 Robux", price: 60.0, popular: false },
        { id: 6, amount: "10000 Robux", price: 85.0, popular: false },
      ],
      features: [
        { icon: Diamond, text: "Quer Robux rápido e fácil? Então esse Gift Card é pra você!" },
        {
          icon: Shield,
          text: "Compre agora e receba o código direto no seu e-mail, pronto pra resgatar na sua conta Roblox!",
        },
        { icon: Zap, text: "Entrega 100% digital e imediata" },
      ],
    },
    "roblox-1700-robux": {
      name: "Roblox 1700 Robux - Entrega Imediata!",
      description: "1700 Robux para Roblox com entrega automática",
      image: "https://wallpapercave.com/wp/wp9190657.jpg",
      category: "Roblox",
      rating: 4.4,
      reviews: 121,
      originalPrice: 25.0,
      price: 18.0,
      discount: "28% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "800 Robux", price: 8.0, popular: false },
        { id: 2, amount: "1700 Robux", price: 18.0, popular: true },
        { id: 3, amount: "2000 Robux", price: 25.0, popular: false },
        { id: 4, amount: "5200 Robux", price: 40.0, popular: false },
        { id: 5, amount: "7200 Robux", price: 60.0, popular: false },
        { id: 6, amount: "10000 Robux", price: 85.0, popular: false },
      ],
      features: [
        { icon: Diamond, text: "Quer Robux rápido e fácil? Então esse Gift Card é pra você!" },
        {
          icon: Shield,
          text: "Compre agora e receba o código direto no seu e-mail, pronto pra resgatar na sua conta Roblox!",
        },
        { icon: Zap, text: "Entrega 100% digital e imediata" },
      ],
    },
    "mobile-legends-250-diamantes": {
      name: "Mobile Legends 💎 250 Diamantes - Entrega Imediata!",
      description: "250 Diamantes para Mobile Legends com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Legends",
      category: "Mobile Legends",
      rating: 4.3,
      reviews: 89,
      originalPrice: 18.0,
      price: 12.0,
      discount: "33% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "86 Diamantes", price: 5.0, popular: false },
        { id: 2, amount: "172 Diamantes", price: 10.0, popular: false },
        { id: 3, amount: "257 Diamantes", price: 15.0, popular: true },
        { id: 4, amount: "344 Diamantes", price: 20.0, popular: false },
        { id: 5, amount: "429 Diamantes", price: 25.0, popular: false },
        { id: 6, amount: "514 Diamantes", price: 30.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "valorant-1000-vp": {
      name: "Valorant Points ⚡ 1000 VP - Entrega Imediata!",
      description: "1000 Valorant Points com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Valorant",
      category: "Valorant",
      rating: 4.6,
      reviews: 134,
      originalPrice: 35.0,
      price: 27.0,
      discount: "23% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "475 VP", price: 15.0, popular: false },
        { id: 2, amount: "1000 VP", price: 30.0, popular: true },
        { id: 3, amount: "1950 VP", price: 55.0, popular: false },
        { id: 4, amount: "3250 VP", price: 85.0, popular: false },
        { id: 5, amount: "5350 VP", price: 135.0, popular: false },
        { id: 6, amount: "11000 VP", price: 270.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "fortnite-1000-vbucks": {
      name: "Fortnite 1000 V-Bucks - Entrega Imediata!",
      description: "1000 V-Bucks para Fortnite com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Fortnite",
      category: "Fortnite",
      rating: 4.4,
      reviews: 98,
      originalPrice: 25.0,
      price: 19.9,
      discount: "20% OFF",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "1000 V-Bucks", price: 20.0, popular: false },
        { id: 2, amount: "2800 V-Bucks", price: 50.0, popular: true },
        { id: 3, amount: "5000 V-Bucks", price: 85.0, popular: false },
        { id: 4, amount: "13500 V-Bucks", price: 200.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "steam-wallet-50": {
      name: "Steam Wallet R$ 50 - Entrega Imediata!",
      description: "Carteira Steam R$ 50 com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Steam",
      category: "Steam",
      rating: 4.7,
      reviews: 167,
      originalPrice: 50.0,
      price: 50.0,
      discount: "PREÇO JUSTO",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "R$ 12", price: 12.0, popular: false },
        { id: 2, amount: "R$ 30", price: 30.0, popular: true },
        { id: 3, amount: "R$ 50", price: 50.0, popular: false },
        { id: 4, amount: "R$ 100", price: 100.0, popular: false },
        { id: 5, amount: "R$ 200", price: 200.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "xbox-giftcard-25": {
      name: "Xbox Giftcard R$ 25 - Entrega Imediata!",
      description: "Giftcard Xbox R$ 25 com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Xbox",
      category: "Xbox",
      rating: 4.5,
      reviews: 112,
      originalPrice: 25.0,
      price: 25.0,
      discount: "PREÇO JUSTO",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "R$ 25", price: 25.0, popular: false },
        { id: 2, amount: "R$ 50", price: 50.0, popular: true },
        { id: 3, amount: "R$ 100", price: 100.0, popular: false },
        { id: 4, amount: "R$ 200", price: 200.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "google-play-50": {
      name: "Google Play R$ 50 - Entrega Imediata!",
      description: "Giftcard Google Play R$ 50 com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Google+Play",
      category: "Google Play",
      rating: 4.6,
      reviews: 145,
      originalPrice: 50.0,
      price: 50.0,
      discount: "PREÇO JUSTO",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "Google Play R$ 30", price: 30.0, popular: false },
        { id: 2, amount: "Google Play R$ 50", price: 50.0, popular: true },
        { id: 3, amount: "Netflix R$ 30", price: 30.0, popular: false },
        { id: 4, amount: "Spotify R$ 20", price: 20.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
    "netflix-giftcard": {
      name: "Netflix Giftcard - Entrega Imediata!",
      description: "Giftcard Netflix com entrega automática",
      image: "/placeholder.svg?height=400&width=600&text=Netflix",
      category: "Netflix",
      rating: 4.4,
      reviews: 87,
      originalPrice: 30.0,
      price: 30.0,
      discount: "PREÇO JUSTO",
      badges: ["999+ UNIDADES VENDIDAS", "OFERTAS RELÂMPAGO"],
      variants: [
        { id: 1, amount: "Google Play R$ 30", price: 30.0, popular: false },
        { id: 2, amount: "Google Play R$ 50", price: 50.0, popular: true },
        { id: 3, amount: "Netflix R$ 30", price: 30.0, popular: false },
        { id: 4, amount: "Spotify R$ 20", price: 20.0, popular: false },
      ],
      features: [
        { icon: Zap, text: "Entrega 100% digital e imediata" },
        { icon: Shield, text: "Compra segura e protegida" },
        { icon: Clock, text: "Suporte 24 horas por dia" },
      ],
    },
  }

  return products[slug as keyof typeof products] || products["free-fire-100-diamantes"]
}

const relatedProducts = [
  {
    id: 1,
    name: "Google Play - Gift Card Digital",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/placeholder.svg?height=200&width=300&text=Google+Play",
  },
  {
    id: 2,
    name: "iFood - Giftcard Digital - 50% OFF",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/placeholder.svg?height=200&width=300&text=iFood",
  },
  {
    id: 3,
    name: "Gift Card Uber - Vale Transporte Digital",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/placeholder.svg?height=200&width=300&text=Uber",
  },
  {
    id: 4,
    name: "Shopee - Cupom Digital",
    price: "R$ 10,00",
    installment: "ou 12x de R$ 0,99",
    image: "/placeholder.svg?height=200&width=300&text=Shopee",
  },
]

const allCustomerReviews = [
  {
    name: "Carlos",
    verified: true,
    rating: 5,
    comment: "Excelente serviço! Recebi minha recarga em menos de 2 minutos. Super recomendo, é confiável e rápido.",
    date: "2 hours ago",
  },
  {
    name: "Ana Paula",
    verified: true,
    rating: 4,
    comment:
      "Muito bom! Comprei diamantes para Free Fire e chegou rapidinho. Preço justo e entrega imediata como prometido.",
    date: "1 day ago",
  },
  {
    name: "João Silva",
    verified: true,
    rating: 5,
    comment:
      "Perfeito! Já é a terceira vez que compro aqui. Sempre funciona certinho, entrega na hora e suporte muito bom.",
    date: "3 days ago",
  },
  {
    name: "Mariana",
    verified: true,
    rating: 4,
    comment:
      "Ótima experiência! Pagamento pelo PIX foi super fácil e recebi o código instantaneamente. Site confiável.",
    date: "5 days ago",
  },
  {
    name: "Pedro",
    verified: true,
    rating: 5,
    comment: "Top demais! Comprei Robux e funcionou perfeitamente. Preço melhor que outros sites e entrega automática.",
    date: "1 week ago",
  },
  {
    name: "Fernanda",
    verified: true,
    rating: 4,
    comment: "Muito satisfeita com a compra. Processo simples, pagamento seguro e recebi tudo certinho. Recomendo!",
    date: "1 week ago",
  },
  {
    name: "Lucas",
    verified: true,
    rating: 5,
    comment: "Sensacional! Melhor site para comprar recargas. Já indiquei para vários amigos e todos aprovaram.",
    date: "2 weeks ago",
  },
  {
    name: "Gabriela",
    verified: true,
    rating: 4,
    comment: "Excelente atendimento! Tive uma dúvida e o suporte respondeu super rápido. Produto chegou na hora.",
    date: "2 weeks ago",
  },
  {
    name: "Rafael",
    verified: true,
    rating: 5,
    comment: "Entrega super rápida e sem burocracia. Recomendo a todos que precisam de recarga urgente!",
    date: "3 weeks ago",
  },
  {
    name: "Beatriz",
    verified: true,
    rating: 4,
    comment: "Bom preço e serviço eficiente. A plataforma é fácil de usar e o suporte é atencioso.",
    date: "3 weeks ago",
  },
  {
    name: "Thiago",
    verified: true,
    rating: 5,
    comment: "Comprei para meu filho e ele amou! Chegou na hora e sem problemas. Voltarei a comprar.",
    date: "1 month ago",
  },
  {
    name: "Juliana",
    verified: true,
    rating: 5,
    comment: "Site muito confiável, já fiz várias compras e nunca tive dor de cabeça. Parabéns pelo trabalho!",
    date: "1 month ago",
  },
  {
    name: "Felipe",
    verified: true,
    rating: 4,
    comment: "Achei o processo de compra bem simples e rápido. A recarga chegou em poucos minutos.",
    date: "1 month ago",
  },
  {
    name: "Larissa",
    verified: true,
    rating: 5,
    comment: "Atendimento impecável! Tive um pequeno problema e foi resolvido em questão de minutos. Super indico!",
    date: "2 months ago",
  },
  {
    name: "Gustavo",
    verified: true,
    rating: 5,
    comment: "Melhor lugar para comprar gift cards. Preços competitivos e entrega instantânea. Nota 10!",
    date: "2 months ago",
  },
]

const REVIEWS_PER_PAGE = 3 // Define quantas avaliações por página

export default function ProductPage({ slug }: ProductPageProps) {
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product.variants.find((v) => v.popular) || product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [currentPage, setCurrentPage] = useState(1) // Estado para a página atual das avaliações

  const installments = (selectedVariant.price / 12).toFixed(2).replace(".", ",")
  const pixDiscount = selectedVariant.price * 0.98

  const totalPages = Math.ceil(allCustomerReviews.length / REVIEWS_PER_PAGE)
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE
  const endIndex = startIndex + REVIEWS_PER_PAGE
  const currentReviews = allCustomerReviews.slice(startIndex, endIndex)

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-orange-500">
            Página inicial
          </Link>
          <span className="mx-2">›</span>
          <Link href="/produtos" className="hover:text-orange-500">
            Todos os produtos
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>

            {/* Thumbnail */}
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-white rounded border-2 border-orange-500 p-1">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="w-full h-full object-cover rounded"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badges.map((badge, index) => (
                <Badge key={index} className={index === 0 ? "bg-green-500" : "bg-orange-500"}>
                  {badge}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-orange-500">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : star === Math.ceil(product.rating)
                          ? "text-yellow-400 fill-current opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">
                R$ {selectedVariant.price.toFixed(2).replace(".", ",")}
              </div>
              <div className="text-sm text-gray-600">💳 em até 12x de R$ {installments}</div>
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-500">💎 {product.discount} no pix</Badge>
                <Badge className="bg-green-500">⚡ ENVIO IMEDIATO</Badge>
              </div>
            </div>

            {/* Variants */}
            <div className="space-y-3">
              <h3 className="font-semibold">RECARGAS: {selectedVariant.amount.toUpperCase()}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {product.variants.map((variant) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant.id === variant.id ? "default" : "outline"}
                    className={`relative ${
                      selectedVariant.id === variant.id ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant.amount}
                    {variant.popular && <Badge className="absolute -top-2 -right-2 bg-green-500 text-xs px-1">✓</Badge>}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="text-center">
              <div className="text-sm font-medium">Queima de estoque: 21 disponíveis</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-black h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>

            {/* Quantity and Buy */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <Button size="sm" variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button size="sm" variant="outline" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 text-lg">
                COMPRAR AGORA
              </Button>
            </div>

            {/* Payment Methods */}
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-2">🔒 PAGAMENTO SEGURO E RÁPIDO</div>
              <div className="flex justify-center space-x-2">
                <div className="text-xs bg-white px-2 py-1 rounded border">VISA</div>
                <div className="text-xs bg-white px-2 py-1 rounded border">MASTER</div>
                <div className="text-xs bg-white px-2 py-1 rounded border">ELO</div>
                <div className="text-xs bg-white px-2 py-1 rounded border">AMEX</div>
                <div className="text-xs bg-white px-2 py-1 rounded border">PIX</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center">📋 DESCRIÇÃO</h2>
          <div className="space-y-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <feature.icon className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="font-semibold text-green-600">💡 Vantagens:</h3>
            <div className="flex items-center space-x-2">
              <span className="text-green-600">✅</span>
              <span>Entrega 100% digital e imediata</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={relatedProduct.image || "/placeholder.svg"}
                  alt={relatedProduct.name}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                  unoptimized
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                  <div className="text-lg font-bold mb-1">{relatedProduct.price}</div>
                  <div className="text-xs text-gray-600 mb-3">{relatedProduct.installment}</div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white text-sm">COMPRAR</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Rating Summary */}
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-500 mb-2">{product.rating}</div>
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">De {product.reviews} avaliações</div>

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
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Avaliações dos Clientes</h3>
                <Button className="bg-gray-800 hover:bg-gray-900 text-white">Escrever uma Avaliação</Button>
              </div>

              <div className="space-y-4">
                {currentReviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium">{review.name}</span>
                      {review.verified && <Badge className="bg-green-100 text-green-800 text-xs">Verificado ✓</Badge>}
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

              {/* Pagination Controls */}
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
