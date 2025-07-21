import { Mail, MessageCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <section className="py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h1>
          <p className="text-gray-600">Estamos aqui para ajudar você com qualquer dúvida ou problema</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <Input type="text" placeholder="Seu nome completo" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <Input type="text" placeholder="Assunto da mensagem" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <Textarea placeholder="Descreva sua dúvida ou problema..." rows={5} />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-600">suporte@slgames.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-gray-600">24 horas por dia, 7 dias por semana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h3>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">Como recebo minha recarga?</p>
                  <p className="text-gray-600 text-sm">
                    Após a confirmação do pagamento, sua recarga é enviada automaticamente para o ID informado.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Quanto tempo demora a entrega?</p>
                  <p className="text-gray-600 text-sm">
                    A entrega é imediata após a confirmação do pagamento, geralmente em poucos segundos.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Posso cancelar minha compra?</p>
                  <p className="text-gray-600 text-sm">
                    Devido à natureza digital dos produtos, cancelamentos só são possíveis antes da entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
