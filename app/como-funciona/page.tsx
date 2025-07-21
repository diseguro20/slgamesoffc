import Header from "@/components/header"
import Footer from "@/components/footer"
import HowItWorksPage from "@/components/how-it-works-page"

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HowItWorksPage />
      </main>
      <Footer />
    </div>
  )
}
