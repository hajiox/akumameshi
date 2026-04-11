import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-black">
      {/* Jiro Inspire Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_rrkn4trrkn4trrkn-41PjE7AIniBnhn4Idoa8QjnyOUK8op.jpg"
          alt="悪魔のBUTAめし - 二郎インスパイア＋炊き込みご飯"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>

      {/* 自社謹製チャーシュー使用 */}
      <div className="relative w-full max-w-6xl mx-auto px-4 py-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_ccuku3ccuku3ccuk.jfif-XxcDx5NljG7uzg8AZy63qfgRBl1FlT.jpeg"
          alt="自社謹製チャーシュー使用 - 一番人気商品を使用"
          width={1200}
          height={1200}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  )
}
