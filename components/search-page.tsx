"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const allProducts = [
  {
    id: 1,
    slug: "free-fire-100-diamantes",
    name: "Free Fire 💎 100 Diamantes",
    price: "R$ 5,00",
    installment: "ou 12x de R$ 0,49",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-orange-400 to-red-500",
    keywords: ["free fire", "diamantes", "ff"],
  },
  {
    id: 2,
    slug: "roblox-800-robux",
    name: "Roblox 800 Robux",
    price: "R$ 8,00",
    installment: "ou 12x de R$ 0,79",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-blue-500 to-purple-600",
    keywords: ["roblox", "robux", "rb"],
  },
  {
    id: 3,
    slug: "valorant-1000-vp",
    name: "Valorant Points ⚡ 1000 VP",
    price: "R$ 27,00",
    installment: "ou 12x de R$ 2,69",
    image: "/placeholder.svg?height=150&width=250",
    bgColor: "bg-gradient-to-br from-red-500 to-pink-600",
    keywords: ["valorant", "vp", "points"],
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(allProducts)

  useEffect(() => {
    const searchQuery = searchParams.get("q") || ""
    setQuery(searchQuery)

    if (searchQuery) {
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase())),
      )
      setResults(filtered)
    } else {
      setResults(allProducts)
    }
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const searchQuery = formData.get("search") as string

    if (searchQuery) {
      window.location.href = `/buscar?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {query ? `Resultados para "${query}"` : "Buscar Produtos"}
          </h1>

          <form onSubmit={handleSearch} className="max-w-md">
            <div className="relative">
              <Input
                name="search"
                type="text"
                placeholder="Digite o nome do jogo..."
                defaultValue={query}
                className="pr-20"
              />
              <Button
                type="submit"
                className="absolute right-0 top-0 h-full px-6 bg-green-600 hover:bg-green-700 rounded-l-none"
              >
                Buscar
              </Button>
            </div>
          </form>
        </div>

        {results.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">Nenhum produto encontrado</h2>
            <p className="text-gray-500 mb-6">Tente buscar por outros termos</p>
            <Link href="/produtos">
              <Button className="bg-orange-500 hover:bg-orange-600">Ver Todos os Produtos</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {results.map((product) => (
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
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

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
        )}
      </div>
    </section>
  )
}
