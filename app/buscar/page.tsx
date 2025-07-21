import Header from "@/components/header"
import Footer from "@/components/footer"
import SearchPage from "@/components/search-page"

export default function BuscarPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <SearchPage />
      </main>
      <Footer />
    </div>
  )
}
