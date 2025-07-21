import Header from "@/components/header"
import Footer from "@/components/footer"
import AllProducts from "@/components/all-products"

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <AllProducts />
      </main>
      <Footer />
    </div>
  )
}
