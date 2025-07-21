"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Orange Header */}
      <header className="bg-dark-navy text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/images/slgames-logo.png" alt="SLGAMES" width={150} height={75} className="h-16 w-auto" />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
