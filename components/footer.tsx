"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Brand Hall Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title text at top instead of logo */}
          <div className="text-center mb-8">
            <p className="text-white text-lg font-bold">
              <span>この商品は「会津ブランド館」が製造・販売・発送を行っています。</span>
            </p>
          </div>

          {/* Two column layout: Shop image on left, Store info on right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            {/* Left: Shop image */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brandkan-NlYVRmRScWOazwo8JhfH1SagSDWzXI.jpg"
                  alt="会津ブランド館 店舗外観"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right: Store info */}
            <div className="text-center md:text-left text-gray-300 text-sm space-y-2">
              <p className="font-bold text-white text-xl mb-3">店舗案内</p>
              <p className="font-bold text-white text-lg">会津ブランド館</p>
              <p>〒965-0044</p>
              <p>福島県会津若松市七日町6-15</p>
              <p>営業時間: 11時〜16時</p>
              <p>定休日: 12月31日・1月1日</p>
              <p className="text-gray-400">（発送もお休みさせて頂きます）</p>
            </div>
          </div>

          {/* Map at bottom - wide layout */}
          <div className="w-full">
            <div className="aspect-[21/9] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.30388931034!2d139.9208079!3d37.5007502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff5535cf0cdc5a7%3A0xc1e02afb913c2084!2z5Lya5rSl44OW44Op44Oz44OJ6aSoIEFpenUgQnJhbmQgSGFsbA!5e0!3m2!1sja!2sjp!4v1775608622967!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="会津ブランド館 地図"
              />
            </div>
            <p className="text-center mt-3">
              <Link 
                href="https://maps.app.goo.gl/eBrQ2NsVb1tohJHa7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 text-sm underline"
              >
                Google Mapで見る
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* SNS Links & Copyright */}
      <div className="bg-black py-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          {/* SNS Icons */}
          <div className="flex justify-center items-center gap-6 mb-4">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/aizubrandkan/?locale=ja_JP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/aizubrandhall/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            {/* X (Twitter) */}
            <Link
              href="https://x.com/Aizu_Brand_Kan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="X"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            {/* YouTube */}
            <Link
              href="https://www.youtube.com/channel/UCpusPn2NlWyrgkIMbacH4-w"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
          {/* Copyright */}
          <p className="text-gray-500 text-xs text-center">
            <span>© 2025 会津ブランド館 All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
