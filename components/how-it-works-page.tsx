import { ShoppingCart, User, CreditCard, Zap, Shield, Headphones } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Escolha o produto",
    description: "Navegue por nossa seleção de jogos e escolha o valor da recarga que você precisa.",
  },
  {
    icon: User,
    title: "2. Informe seus dados",
    description: "Digite seu ID do jogo ou email da conta para onde a recarga será enviada.",
  },
  {
    icon: CreditCard,
    title: "3. Realize o pagamento",
    description: "Pague com PIX, cartão de crédito ou débito de forma rápida e segura.",
  },
  {
    icon: Zap,
    title: "4. Receba instantaneamente",
    description: "Sua recarga é processada automaticamente e enviada em segundos.",
  },
]

const features = [
  {
    icon: Zap,
    title: "Entrega Imediata",
    description: "Receba sua recarga em segundos após a confirmação do pagamento",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Pagamentos protegidos e dados criptografados para sua segurança",
  },
  {
    icon: Headphones,
    title: "Suporte 24h",
    description: "Nossa equipe está sempre pronta para ajudar você a qualquer hora",
  },
]

export default function HowItWorksPage() {
  return (
    <section className="py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como funciona a SLGAMES?</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Processo simples e rápido para você receber suas recargas favoritas
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Por que escolher a SLGAMES?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Como funciona a entrega?</h3>
              <p className="text-gray-600">
                Após a confirmação do pagamento, nossa plataforma automaticamente processa sua recarga e envia para o ID
                ou conta informada. O processo é totalmente automatizado e leva apenas alguns segundos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quais formas de pagamento vocês aceitam?</h3>
              <p className="text-gray-600">
                Aceitamos PIX (com desconto especial), cartões de crédito (Visa, Mastercard, Elo, American Express) e
                cartões de débito. Todos os pagamentos são processados de forma segura.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E se eu não receber minha recarga?</h3>
              <p className="text-gray-600">
                Nosso sistema tem 99.9% de taxa de sucesso. Caso ocorra algum problema, nossa equipe de suporte está
                disponível 24h para resolver rapidamente sua situação.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Posso comprar para outra pessoa?</h3>
              <p className="text-gray-600">
                Sim! Você pode informar qualquer ID válido do jogo na hora da compra. É uma ótima opção para presentear
                amigos e familiares.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
