import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductPage from "@/components/product-page"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function Product({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <ProductPage slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
