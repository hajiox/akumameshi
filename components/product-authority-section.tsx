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
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <Image
          src="/images/butameshi-cooking.jpg"
          alt="悪魔のBUTAめし 盛り付け例"
          width={1075}
          height={717}
          className="mx-auto w-full max-w-[820px] h-auto rounded shadow-md"
        />
        <div className="mt-7 font-bold leading-tight text-gray-950">
          <p className="text-2xl md:text-3xl">
            二郎インスパイア 悪魔のBUTAめし
          </p>
          <p className="mt-2 text-xl md:text-2xl">
            2個セット（1個で2～3人前）
          </p>
          <p className="mt-5 text-2xl md:text-3xl text-red-700">
            2,380円（税・送料込）
          </p>
        </div>
      </div>
    </section>
  )
}
