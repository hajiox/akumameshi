"use client"

import Image from "next/image"

function handleMallClick() {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'MallClick', {
        product: 'butameshi',
      })
      console.log('[v0] Meta MallClick fired', 'butameshi')
    }
  } catch (err) {
    console.log('[v0] Tracking error', err)
  }
}

export function PurchaseSection() {
  return (
    <section id="purchase" className="bg-white py-16 scroll-mt-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span>ご購入はこちら</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-red-700 mb-8">
            <span>2個セット  2,380円（税込・送料込）</span>
          </p>
        </div>

        {/* Purchase Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {/* Yahoo */}
          <a
            href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318635247.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col bg-[#ffdddd] p-6 rounded-lg hover:shadow-lg transition-shadow"
            onClick={handleMallClick}
          >
            <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyyahoo-KmL0yszRmx203LjFRJo1wy4m5m4esP.png"
                alt="Yahoo!ショッピングで購入"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-1 flex-col text-center text-gray-900">
              <p className="font-bold text-base mb-2">Yahoo!ショッピング</p>
              <p className="text-sm mb-4 leading-relaxed">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
              <p className="mx-auto mt-auto flex w-full max-w-[280px] flex-col items-center justify-center rounded border border-red-300 bg-white px-3 py-2.5 text-center font-sans text-[0.82rem] font-bold leading-snug text-red-700 shadow-sm">
                <span>初めて当店をご利用のお客様に</span>
                <span className="mt-0.5 text-[0.95rem] text-red-800">300円クーポン進呈中!</span>
              </p>
            </div>
          </a>

          {/* Rakuten */}
          <a
            href="https://item.rakuten.co.jp/aizubrandhall/4571318635247/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col bg-[#deeeff] p-6 rounded-lg hover:shadow-lg transition-shadow"
            onClick={handleMallClick}
          >
            <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyrakutenn-TUtoGDzEBNh1kKGVO2ceuwOhtTzJ9S.png"
                alt="楽天市場で購入"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-1 flex-col text-center text-gray-900">
              <p className="font-bold text-base mb-2">楽天市場</p>
              <p className="text-sm mb-4 leading-relaxed">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
              <p className="mx-auto mt-auto flex w-full max-w-[280px] flex-col items-center justify-center rounded border border-red-300 bg-white px-3 py-2.5 text-center font-sans text-[0.82rem] font-bold leading-snug text-red-700 shadow-sm">
                <span>初めて当店をご利用のお客様に</span>
                <span className="mt-0.5 text-[0.95rem] text-red-800">300円クーポン進呈中!</span>
              </p>
            </div>
          </a>

          {/* Amazon */}
          <a
            href="https://www.amazon.co.jp/dp/B0GWCVHS8N"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col bg-[#e8ffdd] p-6 rounded-lg hover:shadow-lg transition-shadow"
            onClick={handleMallClick}
          >
            <div className="bg-white p-4 mx-auto max-w-[200px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-gray-200 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyAmazon-pZqZL58v1PHhI6H488EfZgGNA7zX3M.png"
                alt="Amazonで購入"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-1 flex-col text-center text-gray-900">
              <p className="font-bold text-base mb-2">Amazon</p>
              <p className="text-sm mb-4 leading-relaxed">Amazonポイントが使える世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
