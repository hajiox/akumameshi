"use client"

import Image from "next/image"

export function RecipeSection() {
  return (
    <section className="bg-[#d4c4a8] py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
            最大のポイント
            <span className="text-red-700">「もやしの入れ方」</span>
            で変化する食感
          </h2>
          <p className="text-gray-700 text-lg">
            その日の気分で、あなただけの最高の一椀を
          </p>
        </div>

        {/* Recipe Cards - Stacked for mobile readability */}
        <div className="flex flex-col gap-8">
          {/* 作り方1: もやし先入れ味染み */}
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BD%9C%E3%82%8A%E6%96%B9%EF%BC%92-BCeIk74LblO2BsmXHp34chZJ33zlrc.jpg"
              alt="悪魔のBUTAめし【作り方① もやし先入れ味染み】お米2合・水1.8合、本製品投入、もやし250gドサッ、炊飯ボタンポチッ・完成"
              width={1200}
              height={1200}
              className="w-full md:w-[90%] h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* 作り方2: もやし後入れシャキシャキ */}
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BD%9C%E3%82%8A%E6%96%B91-kC3dh5WXXkWPcKsAlxmeJzkrC0XOCX.jpg"
              alt="悪魔のBUTAめし【作り方② もやし後入れシャキシャキ】もやし250g耐熱ボウルにレンジ600W90秒、お米2合・水・悪魔の素投入、炊飯開始、炊き上がりにもやし乗せ10分蒸らして完成"
              width={1200}
              height={1200}
              className="w-full md:w-[90%] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
