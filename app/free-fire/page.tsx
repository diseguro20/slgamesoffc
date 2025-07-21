import Header from "@/components/header"
import Footer from "@/components/footer"
import PurchasePage from "@/components/purchase-page"

export default function FreeFirePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <PurchasePage slug="free-fire" />
      </main>
      <Footer />
    </div>
  )
}
