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

        {/* Retort Images - Side by side */}
        <div className="grid grid-cols-2 gap-4">
          {/* Retort BUTA 1位 */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yahoo%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88BUTA1%E4%BD%8D-mNb3ELuKCgtmtNnIJYADK74SjCnCuN.jpg"
            alt="Yahoo!ショッピング レトルトBUTA1位獲得"
            width={800}
            height={800}
            className="w-full h-auto rounded-lg"
          />

          {/* Retort Bara 3位 */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yahoo%E3%83%AC%E3%83%88%E3%83%AB%E3%83%88%E3%83%90%E3%83%A93%E4%BD%8D-qD5pVfhHuAh3RZjytX654cqmfCYLvv.jpg"
            alt="Yahoo!ショッピング レトルトバラ3位獲得"
            width={800}
            height={800}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Product Package */}
        <div className="flex justify-center pb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4571318635247-ELoxLxtvyE6rV9YjwHl8vRRIZQcVCE.jpg"
            alt="悪魔のBUTAめし 2個セット"
            width={1200}
            height={1200}
            className="w-full md:w-[90%] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
