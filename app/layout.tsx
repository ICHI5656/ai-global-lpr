import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Global株式会社 - LPR事業 | デジタルマーケティングソリューション",
  description: "AI Global株式会社のLPR事業（ナンバープレート認識）とデジタルマーケティングサービス。SNSコンサルティング、動画編集、SNS運用でビジネスの成長を支援します。",
  keywords: "LPR, ナンバープレート認識, SNSコンサルティング, 動画編集, SNS運用, デジタルマーケティング",
  openGraph: {
    title: "AI Global株式会社 - LPR事業",
    description: "最先端のAI技術とデジタルマーケティングでビジネスを支援",
    type: "website",
    locale: "ja_JP",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}