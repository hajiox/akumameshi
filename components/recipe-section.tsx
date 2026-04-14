"use client"

import Image from "next/image"

export function RecipeSection() {
  return (
    <section className="bg-[#d4c4a8] py-10">
      {/* Section Title */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
          最大のポイント
          <span className="text-red-700">「もやしの入れ方」</span>
          で変化する食感
        </h2>
        <p className="text-gray-700 text-lg">
          その日の気分で、あなただけの最高の一椀を
        </p>
      </div>

      {/* Recipe Cards - Stacked on mobile (full width), side by side on PC */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 md:max-w-5xl md:mx-auto md:px-4 gap-4">
        {/* 作り方1: もやし先入れ味染み */}
        <div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%BC%AB%E7%94%BB%E3%81%AA%E3%81%8A%E3%81%97%EF%BC%92-Y8l0JEFYBEqfpBUTrySdnHfh5XZgG1.jpg"
            alt="その①【もやし先入れ味染み】お米2合、水1.8合の目盛りまで、本製品を投入、もやし250g先入れ、炊飯ボタンON、完成！味染みもやしの炊き込みご飯"
            width={1200}
            height={1200}
            className="w-full h-auto md:rounded-lg shadow-lg"
          />
        </div>

        {/* 作り方2: もやし後入れシャキシャキ */}
        <div>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%BC%AB%E7%94%BB%E3%81%AA%E3%81%8A%E3%81%97-5AtUWoRD6UN1I0ZU8Pjfz0qVhfpfqM.jpg"
            alt="その②【もやし後入れシャキシャキ】もやし250gを耐熱容器に・電子レンジ600W約90秒、お米2合（3合でも良い）・水1.8合固めに炊く・本製品投入、炊き上がったら加熱したもやしを10分蒸らして完成"
            width={1200}
            height={1200}
            className="w-full h-auto md:rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
