"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black border-b-4 border-amber-500">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rogo-hXpxyCVRGaGdMTjMloA5Zg4LyomdzP.jpg"
            alt="AIZU BRAND HALL"
            width={80}
            height={80}
            className="rounded"
          />
        </Link>
      </div>
    </header>
  )
}
