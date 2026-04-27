import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-black py-12 md:py-16">
      <div className="relative w-full max-w-6xl mx-auto px-4 flex justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8o7pok8o7pok8o7p-IS0d2Ra8YfxtAG1cR9HJEx2PDc7qfq.jpg"
          alt="悪魔のBUTAめし - 二郎インスパイア＋炊き込みご飯 ニンニク・アブラ増々！理性を破壊する悪魔的背徳感"
          width={1200}
          height={800}
          className="w-full md:w-[90%] h-auto rounded-lg"
          priority
        />
      </div>
    </section>
  )
}
