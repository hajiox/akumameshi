"use client"

import Image from "next/image"

export function RecipeSection() {
  return (
    <section className="bg-[#d4c4a8] py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4" suppressHydrationWarning>
            {"最大の醍醐味:"}
            <br className="md:hidden" />
            <span className="text-red-700">{"「もやしの入れ方」"}</span>
            {"ひとつで変わる2つの顔"}
          </h2>
          <p className="text-gray-700 text-lg">
            &#12381;&#12398;&#26085;&#12398;&#27671;&#20998;&#12391;&#12289;&#12354;&#12394;&#12383;&#12384;&#12369;&#12398;&#26368;&#39640;&#12398;&#19968;&#26579;&#12434;
          </p>
        </div>

        {/* Recipe Cards - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 作り方1: もやし先入れ味染み */}
          <div className="bg-[#c9b896] rounded-lg overflow-hidden shadow-lg border-4 border-amber-700">
            <div className="p-3 bg-amber-800 text-white">
              <h3 className="text-lg font-bold text-center" suppressHydrationWarning>
                {"パターンA: 一緒に炊き込む"}
              </h3>
              <p className="text-center text-amber-200 text-xs mt-1" suppressHydrationWarning>
                {"味が染み込んだクタッと食感"}
              </p>
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BD%9C%E3%82%8A%E6%96%B9%EF%BC%92-Ik9NTRfXcAaE3mmIkYIVlSFfGW5Xfl.jpg"
              alt="悪魔のBUTAめし 作り方① もやし先入れ味染み"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* 作り方2: もやし後入れシャキシャキ */}
          <div className="bg-[#c9b896] rounded-lg overflow-hidden shadow-lg border-4 border-amber-700">
            <div className="p-3 bg-amber-800 text-white">
              <h3 className="text-lg font-bold text-center" suppressHydrationWarning>
                {"パターンB: 後から混ぜる"}
              </h3>
              <p className="text-center text-amber-200 text-xs mt-1" suppressHydrationWarning>
                {"シャキシャキ食感のアクセント"}
              </p>
            </div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BD%9C%E3%82%8A%E6%96%B91-X5MDQdTzQ0H4KEpvSIFBg9qynmQDvK.jpg"
              alt="悪魔のBUTAめし 作り方② もやし後入れシャキシャキ"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
