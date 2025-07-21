"use client"

import Link from "next/link"
import Image from "next/image"
import { Lock } from "lucide-react" // Importa o ícone de cadeado

const games = [
  { name: "ROBLOX", slug: "roblox", image: "/images/roblox-selection.webp", locked: false },
  { name: "FREE FIRE", slug: "free-fire", image: "/images/free-fire-selection.webp", locked: true }, // Agora bloqueado
  { name: "VALORANT", slug: "valorant", image: "/images/valorant-selection.webp", locked: true }, // Bloqueado
  { name: "MOBILE LEGENDS", slug: "mobile-legends", image: "/images/mobile-legends-selection.webp", locked: true }, // Bloqueado
  { name: "BRAWL STARS", slug: "brawl-stars", image: "/images/brawl-stars-selection.webp", locked: true }, // Bloqueado
]

export default function GameSelectionSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] bg-dark-navy text-white py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase">ESCOLHA SEU JOGO</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {games.map((game) => (
          <Link
            key={game.slug}
            href={game.locked ? "#" : `/${game.slug}`} // Se bloqueado, o link não leva a lugar nenhum por padrão
            className="group relative" // Adiciona 'relative' para posicionar o overlay
          >
            <div className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 aspect-square">
              {/* Contêiner de tamanho fixo para a imagem */}
              <div className="w-full h-full flex items-center justify-center mb-4">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  width={180}
                  height={180}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <span className="text-lg font-semibold uppercase text-center group-hover:text-orange-400 transition-colors">
                {game.name}
              </span>
            </div>
            {game.locked && (
              <div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-xl cursor-pointer"
                onClick={(e) => {
                  e.preventDefault() // Previne o comportamento padrão do link
                  alert("Conteúdo Bloqueado! Pague R$5 para acesso exclusivo.")
                  // Em um cenário real, você redirecionaria para uma página de pagamento aqui:
                  // window.location.href = "https://link-para-pagamento-de-acesso-exclusivo.com";
                }}
              >
                <Lock className="w-12 h-12 text-white mb-4" />
                <p className="text-white text-center font-bold text-sm px-2">
                  Conteúdo Bloqueado!
                  <br />
                  Pague R$5 para acesso exclusivo
                </p>
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}
