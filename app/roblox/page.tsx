import Header from "@/components/header"
import Footer from "@/components/footer"
import PurchasePage from "@/components/purchase-page"

export default function RobloxPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <PurchasePage slug="roblox" />
      </main>
      <Footer />
    </div>
  )
}
