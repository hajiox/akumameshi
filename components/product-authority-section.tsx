import Image from "next/image"

export function ProductAuthoritySection() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            ランキングを獲得した自社製造
          </h2>
          <p className="text-xl md:text-2xl font-bold text-amber-400">
            チャーシューを使用！
          </p>
        </div>

        <div className="flex justify-center">
          {/* Retort BUTA 1位 */}
          <Image
            src="/images/retort-buta-chashu-ranking-1.jpg"
            alt="楽天市場 レトルトBUTAチャーシュー1位獲得"
            width={1075}
            height={717}
            className="w-full max-w-2xl h-auto rounded-lg"
          />
        </div>

      </div>
    </section>
  )
}

export function ProductPackageSection() {
  return (
    <section className="bg-black pt-8 pb-6 md:pt-10 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4571318635247-ELoxLxtvyE6rV9YjwHl8vRRIZQcVCE.jpg"
          alt="悪魔のBUTAめし 2個セット"
          width={1200}
          height={1200}
          className="w-full max-w-[760px] h-auto rounded-lg"
        />
      </div>
    </section>
  )
}

export function CookingOfferSection() {
  return (
    <section className="bg-black py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid items-center gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <Image
            src="/images/butameshi-cooking.jpg"
            alt="悪魔のBUTAめし 盛り付け例"
            width={1075}
            height={717}
            className="w-full h-auto rounded-lg"
          />
          <div className="rounded-lg border border-amber-500/35 bg-[#120b08] px-5 py-6 text-center md:px-7 md:py-8">
            <p className="text-2xl md:text-3xl font-black leading-tight text-white">
              二郎インスパイア
              <br />
              悪魔のBUTAめし
            </p>
            <p className="mt-4 text-lg md:text-xl font-bold leading-relaxed text-amber-300">
              2個セット
              <br />
              <span className="text-base md:text-lg">（1個で2～3人前）</span>
            </p>
            <p className="mt-4 text-2xl md:text-3xl font-black text-red-500">
              2,380円
            </p>
            <p className="mt-1 text-base md:text-lg font-bold text-white">
              （税・送料込）
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
