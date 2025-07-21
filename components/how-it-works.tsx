import { ShoppingCart, User, CreditCard, Zap } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "Escolha o jogo e valor desejado",
    description: "Navegue por nossa seleção de jogos e escolha o valor da recarga que você precisa.",
  },
  {
    icon: User,
    title: "Informe seu ID ou email",
    description: "Digite seu ID do jogo ou email da conta para onde a recarga será enviada.",
  },
  {
    icon: CreditCard,
    title: "Escolha a forma de pagamento",
    description: "Pague com PIX, cartão de crédito ou débito de forma rápida e segura.",
  },
  {
    icon: Zap,
    title: "Receba instantaneamente!",
    description: "Sua recarga é processada automaticamente e enviada em segundos.",
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como funciona a recarga na SLGAMES?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido para você receber suas recargas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">⚡ Envio Automático</h3>
              <p className="text-green-700">Receba sua recarga em segundos, sem espera!</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-800 mb-2">🎧 Suporte 24h</h3>
              <p className="text-green-700">Nossa equipe está sempre pronta para ajudar você!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
