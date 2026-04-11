import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp"
});

const OGP_IMAGE = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OGP_%E3%82%A2%E3%83%BC%E3%83%88%E3%83%9C%E3%83%BC%E3%83%89%201-i9CxQntZZVvGx73RUZDIhgsN3RRB7x.jpg'
const SITE_URL = 'https://akumameshi.aizu-syokubura.com'
const SITE_NAME = '悪魔のBUTAめし | 会津ブランド館'
const PAGE_TITLE = '悪魔のBUTAめし【公式】二郎インスパイア×炊き込みご飯の素 | 自社謹製チャーシュー150g入り 送料無料'
const DESCRIPTION = '二郎インスパイアの背徳的旨味をご飯でガッツリ味わう炊き込みご飯の素「悪魔のBUTAめし」。自社謹製チャーシュー150g・にんにく×背脂の暴力的な旨味。炊飯器のスイッチを押すだけで簡単完成。2個セット2,380円（税込・送料込）。14時までの注文で即日発送。Amazon・楽天・Yahoo!で購入可。'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  keywords: ['悪魔のBUTAめし', '炊き込みご飯の素', '二郎インスパイア', 'チャーシュー', 'にんにく', '背脂', '会津ブランド館', '送料無料', '即日発送'],
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: '悪魔のBUTAめし | 二郎インスパイア×炊き込みご飯 自社謹製チャーシュー150g',
    description: '二郎インスパイアの背徳的旨味をご飯でガッツリかきこむ！前代未聞の炊き込みご飯の素。自社謹製チャーシュー150g・にんにく×背脂の暴力。炊飯器で簡単完成。送料無料・即日発送。',
    images: [
      {
        url: OGP_IMAGE,
        width: 1200,
        height: 630,
        alt: '悪魔のBUTAめし - 二郎インスパイア×炊き込みご飯の素',
      },
    ],
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Aizu_Brand_Kan',
    creator: '@Aizu_Brand_Kan',
    title: '悪魔のBUTAめし | 二郎インスパイア×炊き込みご飯 自社謹製チャーシュー150g',
    description: '二郎インスパイアの背徳的旨味をご飯でガッツリかきこむ！炊飯器で簡単完成。送料無料・即日発送。',
    images: [OGP_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
