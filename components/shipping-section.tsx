import Image from "next/image"

export function ShippingSection() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-12 pt-4">
        {/* 14時までのご注文で即日発送画像 - 上に配置 */}
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14%E6%99%82%E3%81%BE%E3%81%A7%E5%BD%93%E6%97%A5%E7%99%BA%E9%80%81_202604071538.jpeg_202604080913%20%281%29-RTQgVmiaDHF8EuqxCQSQIszu8ypDjM.jpeg"
            alt="悪魔のBUTAめし - 14時までのご注文で即日発送"
            width={1200}
            height={1200}
            className="w-full md:w-[90%] h-auto rounded-lg"
          />
        </div>

        {/* 注意書き - 炊飯器のお手入れ方法 */}
        <div className="flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B3%A8%E6%84%8F%E6%9B%B8%E3%81%8D-pZ7tXPM3ZB9u7wESC6ptJKO1reWV4W.jpg"
            alt="【必見！】ニンニク＆豚の旨味に感動した炊飯器のお手入れ術 - アルコールで拭く、早炊きスプラッシュ"
            width={1200}
            height={1200}
            className="w-full md:w-[90%] h-auto rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/nekoposu-shipping-guide.jpg"
            alt="即日発送・ポスト投函・到着目安のご案内"
            width={1200}
            height={1200}
            className="w-full md:w-[90%] h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
