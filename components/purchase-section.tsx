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
    <section id="purchase" className="bg-gradient-to-b from-gray-900 to-black py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col gap-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span>ご購入はこちら</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-amber-400 mb-4">
            <span>2個セット  2,380円（税込・送料込）</span>
          </p>
          <div className="w-32 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Purchase Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-stretch">
          {/* Yahoo */}
          <a
            href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318635247.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-4 hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/20 w-[70%] md:w-[80%] md:mx-auto mx-auto"
            onClick={handleMallClick}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyyahoo-KmL0yszRmx203LjFRJo1wy4m5m4esP.png"
              alt="Yahoo!ショッピングで購入"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="mt-3 text-center text-gray-800 text-xs leading-relaxed">
              <p className="font-bold text-sm mb-1">Yahoo!ショッピング</p>
              <p>PayPayポイントが貯まる使えるショッピングモールはこちら</p>
              <p className="mx-auto mt-3 flex w-full max-w-[280px] flex-col items-center justify-center rounded border border-red-300 bg-white px-3 py-2.5 text-center font-sans text-[0.82rem] font-bold leading-snug text-red-700 shadow-sm">
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
            className="block bg-white rounded-xl p-4 hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/20 w-[70%] md:w-[80%] md:mx-auto mx-auto"
            onClick={handleMallClick}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyrakutenn-TUtoGDzEBNh1kKGVO2ceuwOhtTzJ9S.png"
              alt="楽天市場で購入"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="mt-3 text-center text-gray-800 text-xs leading-relaxed">
              <p className="font-bold text-sm mb-1">楽天市場</p>
              <p>楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
              <p className="mx-auto mt-3 flex w-full max-w-[280px] flex-col items-center justify-center rounded border border-red-300 bg-white px-3 py-2.5 text-center font-sans text-[0.82rem] font-bold leading-snug text-red-700 shadow-sm">
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
            className="block bg-white rounded-xl p-4 hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/20 w-[70%] md:w-[80%] md:mx-auto mx-auto"
            onClick={handleMallClick}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/buyAmazon-pZqZL58v1PHhI6H488EfZgGNA7zX3M.png"
              alt="Amazonで購入"
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="mt-3 text-center text-gray-800 text-xs leading-relaxed">
              <p className="font-bold text-sm mb-1">Amazon</p>
              <p>Amazonポイントが使える世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
