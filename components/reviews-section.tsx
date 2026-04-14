"use client"

import Image from "next/image"

const reviews = [
  {
    rating: 5,
    title: "まさに神豚！家でこの背徳感が味わえるとは…",
    content: "パッケージを開けた瞬間にガツンとくるニンニクとアブラの香り。そして何より150gのチャーシューの塊にテンションが爆上がりしました！2合で炊きましたが、炊きあがりにしゃもじを入れると肉がホロホロ崩れて最高です。別茹でしたモヤシとキャベツ、さらに「追い刻みニンニク」と卵黄を乗せたら完全にお店の味になりました。リピ確定です！"
  },
  {
    rating: 5,
    title: "肉のボリュームがエグい！ご飯が無限に消えます",
    content: "ゴロゴロの豚肉が食欲をそそります。味がしっかり濃いめでパンチが効いているので、ご飯が無限に進む食べ物です。"
  },
  {
    rating: 4,
    title: "美味しいですが、匂いには注意！（笑）",
    content: "夫が二郎系好きなので買ってみました。我が家は少しあっさりめに食べたかったので3合のお米で炊きましたが、ちょうど良い濃さで美味しくいただけました。豚の旨味がご飯に染み込んでいて家族にも好評でしたが、炊飯中の部屋の匂いと、炊飯器へのニンニクの匂い残りは結構凄いです。週末専用にするか、食べ終わったらすぐに炊飯器をお手入れすることをおすすめします。"
  },
  {
    rating: 5,
    title: "冷凍ストックのスタメン入り",
    content: "炊きたても美味しいですが、多めに炊いておにぎりにして冷凍しています。レンジでチンするだけで、いつでもあのジャンクな味が食べられるのは本当にありがたい。マヨネーズを少しつけて食べる「悪魔のおにぎり」アレンジにハマっています。"
  },
  {
    rating: 5,
    title: "キャンプ飯の主役に大抜擢！外で食べる背徳感がヤバい",
    content: "ダッチオーブンで炊いてみました。蓋を開けた瞬間のニンニク醤油の香りで、キャンプでとても盛り上がりました。"
  },
  {
    rating: 4,
    title: "ガッツリ好きにはたまらない。",
    content: "基本の2合で炊いてみましたが、味が濃く、脂も濃厚と感じました。入っていた150gのチャーシューのクオリティも本物で、本当にホロホロで美味しかったです。"
  },
  {
    rating: 5,
    title: "金曜の夜、疲れを癒やす最高のご褒美スパイス",
    content: "お米と素を入れてスイッチを押すだけなので、シャワーを浴びている間に完成する手軽さが最高。生卵と刻みネギを落としてかきこむと、一週間の疲れが吹き飛びます。冷凍庫にストックがないと不安になるレベルです。"
  },
  {
    rating: 4,
    title: "おかず不要！高校生の息子たちが無言でドカ食いします",
    content: "150gも立派なチャーシューが入っているので、毎日のご飯が特別なものに変わります。リピート確定です。"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-5 h-5 ${star <= rating ? "text-amber-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span>お客様の声</span>
          </h2>
          <div className="w-32 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-amber-500/50 transition-colors"
            >
              {/* Header with avatar and rating */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-amber-500">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/customerdansei-RXWkunCX4dYpMmzBFU467VnBCFJFkk.jpg"
                    alt="お客様"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <StarRating rating={review.rating} />
                  <h3 className="text-amber-400 font-bold mt-2 text-sm md:text-base leading-tight">
                    {review.title}
                  </h3>
                </div>
              </div>

              {/* Review content */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
