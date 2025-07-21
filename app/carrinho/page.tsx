import Header from "@/components/header"
import Footer from "@/components/footer"
import CartPage from "@/components/cart-page"

export default function CarrinhoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <CartPage />
      </main>
      <Footer />
    </div>
  )
}
