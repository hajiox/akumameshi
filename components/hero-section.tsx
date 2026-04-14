import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-black">
      {/* Jiro Inspire Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-4 flex justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8o7pok8o7pok8o7p-IS0d2Ra8YfxtAG1cR9HJEx2PDc7qfq.jpg"
          alt="悪魔のBUTAめし - 二郎インスパイア＋炊き込みご飯 ニンニク・アブラ増々！理性を破壊する悪魔的背徳感"
          width={1200}
          height={800}
          className="w-full md:w-[90%] h-auto rounded-lg"
          priority
        />
      </div>

      {/* 権威性 - Yahoo!ランキング1位獲得 */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-4 flex justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A8%A9%E5%A8%81%E6%80%A7-OdnqfHELqd0iKwE4PrCQpzttYUA26k.jpeg"
          alt="Yahoo!ショッピングランキング1位獲得 - 自慢の自家製チャーシューを使用、これが至高の商品です、各ECサイトでランキング上位を獲得"
          width={1200}
          height={1200}
          className="w-full md:w-[90%] h-auto rounded-lg"
        />
      </div>
    </section>
  )
}
