import Header from "@/components/header"
import Footer from "@/components/footer"
import GameSelectionSection from "@/components/game-selection-section" // Novo componente

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-navy">
      <Header />
      <main>
        <GameSelectionSection /> {/* Substitui HeroSection e FeaturedProducts */}
      </main>
      <Footer />
    </div>
  )
}
