import Image from "next/image"

export function ShippingSection() {
  return (
    <section className="bg-black py-6">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* 14時までのご注文で即日発送画像 - 上に配置 */}
        <div className="relative w-full max-w-6xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14%E6%99%82%E3%81%BE%E3%81%A7%E5%BD%93%E6%97%A5%E7%99%BA%E9%80%81_202604071538.jpeg_202604080913%20%281%29-RTQgVmiaDHF8EuqxCQSQIszu8ypDjM.jpeg"
            alt="悪魔のBUTAめし - 14時までのご注文で即日発送"
            width={1200}
            height={1200}
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* 注意書き - 炊飯器のお手入れ方法 */}
        <div className="relative w-full max-w-6xl mx-auto flex justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%B3%A8%E6%84%8F%E6%9B%B8%E3%81%8D-pZ7tXPM3ZB9u7wESC6ptJKO1reWV4W.jpg"
            alt="【必見！】ニンニク＆豚の旨味に感動した炊飯器のお手入れ術 - アルコールで拭く、早炊きスプラッシュ"
            width={1200}
            height={1200}
            className="w-full md:w-[90%] h-auto rounded-lg"
          />
        </div>

        {/* 送料無料・即日発送バナー横並び */}
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* 送料無料バナー */}
          <div className="relative w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%80%81%E6%96%99%E7%84%A1%E6%96%99-C5YQZQQKBQUGnXd8xismsTPUBlU6hR.jpg"
              alt="送料無料 - 沖縄・離島地域除く"
              width={400}
              height={150}
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* 即日発送バナー */}
          <div className="relative w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%8D%B3%E6%97%A5%E7%99%BA%E9%80%81-5mzBhRbbEyrJjF1V0L4G1X4q5NiHRZ.jpg"
              alt="14時までのご注文で即日発送 - 12月31日-1月1日は発送をお休みさせて頂いております。急な欠品・SALE等でまれに即日発送できない場合があります。"
              width={400}
              height={150}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
