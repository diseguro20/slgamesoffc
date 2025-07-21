"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2, Plus, Minus } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Free Fire 💎 530 Diamantes",
      price: 25.0,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      name: "Roblox 1700 Robux",
      price: 18.0,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=150",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <section className="py-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho de Compras</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">Seu carrinho está vazio</h2>
            <p className="text-gray-500 mb-6">Adicione alguns produtos para continuar</p>
            <Button className="bg-orange-500 hover:bg-orange-600">Continuar Comprando</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center p-6 border-b last:border-b-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={100}
                      height={80}
                      className="rounded-lg"
                    />

                    <div className="flex-1 ml-4">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-4 text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Resumo do Pedido</h2>

                <div className="space-y-2 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.quantity}x {item.name.substring(0, 20)}...
                      </span>
                      <span>R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3">
                  Finalizar Compra
                </Button>

                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>✅ Entrega imediata</p>
                  <p>✅ Pagamento seguro</p>
                  <p>✅ Suporte 24h</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
