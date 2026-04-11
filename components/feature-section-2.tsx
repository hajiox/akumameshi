import Image from "next/image"

export function FeatureSection2() {
  return (
    <section className="bg-black py-4">
      {/* 手間いらずのシンプルな準備 */}
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%82%E3%82%84%E3%81%97%E3%81%94%E9%A3%AF%E5%B7%AE%E3%81%97%E6%9B%BF%E3%81%88_%E7%94%BB%E5%83%8F%E5%A4%89%E6%9B%B4%E7%84%A1%E3%81%97_202604071426-M7fsTSoLaRkxZBwg029m6URxMFd5GL.jpg"
          alt="手間いらずのシンプルな準備。用意するのは「お米」と「もやし」だけ。包丁も火も使わず、炊飯器のスイッチを押すだけで完成。"
          width={1200}
          height={1200}
          className="w-full md:w-[90%] h-auto rounded-lg"
        />
      </div>
    </section>
  )
}
