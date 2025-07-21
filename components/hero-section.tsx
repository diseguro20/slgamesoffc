export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 text-white overflow-hidden">
      {/* Content Overlay */}
      <div className="relative container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Super Promo Badge */}
          <div className="inline-block mb-6">
            <div className="bg-yellow-400 text-black px-8 py-4 rounded-lg transform -rotate-2 shadow-lg">
              <h1 className="text-4xl md:text-6xl font-black">SUPER</h1>
              <h1 className="text-4xl md:text-6xl font-black -mt-2">PROMO</h1>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-lg md:text-xl font-semibold">GARANTIA • GIFT CARDS EM ATACADO • PROMOÇÕES</p>
            <h2 className="text-3xl md:text-5xl font-bold">ENVIO IMEDIATO!</h2>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">PIX</div>
            <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">ATÉ 4X</div>
            <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-bold">🚚</div>
          </div>
        </div>
      </div>
    </section>
  )
}
