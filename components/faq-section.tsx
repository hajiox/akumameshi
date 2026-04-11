"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQ_DATA = [
  {
    question: "お米は何合で炊くのが一番美味しいですか？",
    answer: "基本のおすすめは「2合」です。二郎系特有のガツンとした濃厚な豚骨醤油ベースの味わいと、150gのたっぷりチャーシューを存分に楽しんでいただけます。もし「少し味が濃すぎる」と感じる場合や、あっさりめがお好みの方は、「3合」で炊いていただくとマイルドになり、美味しくお召し上がりいただけます。"
  },
  {
    question: "もやしやキャベツを一緒に炊飯器に入れて炊いてもいいですか？",
    answer: "野菜から水分が出てしまい、ご飯がベチャッとしたり味が薄まってしまうため、一緒に炊き込むことはおすすめしておりません。二郎感をさらにアップさせたい場合は、別でサッと茹でた「もやし」や「キャベツ」を、炊きあがったご飯の上に「後のせ」していただくのが最高に美味しくなる秘訣です！"
  },
  {
    question: "ニンニクやアブラの匂いが炊飯器に残らないか心配です。",
    answer: "ニンニクの風味や豚の旨味が強い商品のため、炊飯後に内釜やパッキンに匂いが残る場合がございます。ご使用後はなるべく早めに中性洗剤で水洗いをお願いいたします。どうしても匂いが気になる場合は、内釜に水（さらに少量のレモン水）を入れて「早炊き」を一度行っていただくと匂いが軽減されます。"
  },
  {
    question: "ニンニクや背脂の量は自分で調節できますか？",
    answer: "炊き込みご飯の素のベース液にすでにニンニクと背脂がベストな配合でブレンドされているため、減らすことはできません。しかし、「もっとパンチが欲しい！」という方は、炊きあがり後に「刻み生ニンニク」や、市販の「ラード（アブラ）」、さらには「卵黄」をトッピングしていただくことで、より凶暴でクセになる味わいにカスタマイズ可能です。"
  },
  {
    question: "食べきれなかった場合、炊きあがったご飯は冷凍保存できますか？",
    answer: "はい、冷凍保存可能です。"
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#1a1a1a] py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="text-amber-500">FAQ</span>
          </h2>
          <p className="text-gray-400">
            <span>よくあるご質問</span>
          </p>
          <div className="w-32 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-lg overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#333] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-amber-500 font-bold text-xl shrink-0">Q.</span>
                  <span className="text-white font-medium text-base md:text-lg">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-amber-500 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 font-bold text-xl shrink-0">A.</span>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
