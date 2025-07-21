import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactPage from "@/components/contact-page"

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}
