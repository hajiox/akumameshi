import Image from "next/image"

export function FeatureSection1() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8ct3eq8ct3eq8ct3-qQboJ5eX4oTCvQVEfbmh1EJKCeDz4W.jpg"
          alt="肉の暴力・たっぷり150gの巨大チャーシュー！にんにく×背脂の暴力。極濃の素をご飯が余すことなく吸い込んだ、悪魔的な旨味。"
          width={1200}
          height={1200}
          className="w-full md:w-[90%] h-auto rounded-lg"
        />
      </div>
    </section>
  )
}
