"use client"

import Image from "next/image"

type MallDestination = 'yahoo' | 'rakuten' | 'amazon'

function trackMallClick(destination: MallDestination, url: string) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'MallClick', {
        product: 'butameshi',
        destination,
        url,
      })
    }
  } catch (_) {
    // fbq未ロード時はエラーを無視
  }
}

function handleMallClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  destination: MallDestination,
  url: string
) {
  e.preventDefault()
  trackMallClick(destination, url)
  setTimeout(() => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }, 300)
}

export function PurchaseSection() {
  return (
    <section id="purchase" className="bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span>ご購入はこちら</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-amber-400 mb-4">
            <span>2個セット  2,380円（税込・送料込）</span>
          </p>
          <div className="w-32 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Purchase Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
          {/* Yahoo */}
          <a
            href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318635247.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-4 hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/20 w-[70%] md:w-[80%] md:mx-auto mx-auto"
            onClick={(e) => handleMallClick(e, 'yahoo', 'https://store.shopping.yahoo.co.jp/aizubrandhall/4571318635247.html')}
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
              <p className="text-red-600 font-bold mt-1">初めて当店をご利用のお客様に300円クーポン進呈中!</p>
            </div>
          </a>

          {/* Rakuten */}
          <a
            href="https://item.rakuten.co.jp/aizubrandhall/4571318635247/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-4 hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/20 w-[70%] md:w-[80%] md:mx-auto mx-auto"
            onClick={(e) => handleMallClick(e, 'rakuten', 'https://item.rakuten.co.jp/aizubrandhall/4571318635247/')}
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
              <p className="text-red-600 font-bold mt-1">初めて当店をご利用のお客様に300円クーポン進呈中!</p>
            </div>
          </a>

          {/* Amazon */}
          <a
            href="https://www.amazon.co.jp/dp/B0GWCVHS8N"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl p-4 hover:scale-105 transition-transform shadow-lg hover:shadow-amber-500/20 w-[70%] md:w-[80%] md:mx-auto mx-auto"
            onClick={(e) => handleMallClick(e, 'amazon', 'https://www.amazon.co.jp/dp/B0GWCVHS8N')}
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
              <p>世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
