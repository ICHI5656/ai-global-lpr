import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const footerNavigation = {
  services: [
    { name: "LPR事業", href: "#" },
    { name: "SNSコンサルティング", href: "#" },
    { name: "動画編集", href: "#" },
    { name: "SNS運用", href: "#" },
  ],
  company: [
    { name: "会社概要", href: "#" },
    { name: "チーム", href: "#" },
    { name: "ニュース", href: "#" },
    { name: "採用情報", href: "#" },
  ],
  legal: [
    { name: "プライバシーポリシー", href: "#" },
    { name: "利用規約", href: "#" },
    { name: "特定商取引法", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-1000 border-t border-neutral-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-spacing-4 py-spacing-12 sm:px-spacing-6 lg:px-spacing-8 lg:py-spacing-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-spacing-8">
          <div className="space-y-spacing-6">
            <Link href="/" className="text-header-6 font-bold text-gradient">
              AI Global株式会社
            </Link>
            <p className="text-body-6 leading-6 text-neutral-200">
              最先端のAI技術とデジタルマーケティングで、
              お客様のビジネスを次のレベルへ導きます。
            </p>
            <div className="flex space-x-spacing-4">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-300 hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-spacing-12 grid grid-cols-2 gap-spacing-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-spacing-8">
              <div>
                <h3 className="text-body-8 font-semibold leading-6 text-neutral-100">サービス</h3>
                <ul role="list" className="mt-spacing-4 space-y-spacing-3">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-body-6 leading-6 text-neutral-200 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-spacing-8 md:mt-0">
                <h3 className="text-body-8 font-semibold leading-6 text-neutral-100">会社情報</h3>
                <ul role="list" className="mt-spacing-4 space-y-spacing-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-body-6 leading-6 text-neutral-200 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-spacing-8">
              <div>
                <h3 className="text-body-8 font-semibold leading-6 text-neutral-100">法的情報</h3>
                <ul role="list" className="mt-spacing-4 space-y-spacing-3">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-body-6 leading-6 text-neutral-200 hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-spacing-8 md:mt-0">
                <h3 className="text-body-8 font-semibold leading-6 text-neutral-100">連絡先</h3>
                <ul role="list" className="mt-spacing-4 space-y-spacing-3">
                  <li className="flex items-center gap-spacing-2">
                    <MapPin className="h-4 w-4 text-neutral-300" />
                    <span className="text-body-6 text-neutral-200">東京都港区</span>
                  </li>
                  <li className="flex items-center gap-spacing-2">
                    <Phone className="h-4 w-4 text-neutral-300" />
                    <span className="text-body-6 text-neutral-200">03-1234-5678</span>
                  </li>
                  <li className="flex items-center gap-spacing-2">
                    <Mail className="h-4 w-4 text-neutral-300" />
                    <span className="text-body-6 text-neutral-200">info@aiglobal.jp</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-spacing-12 border-t border-neutral-800 pt-spacing-8">
          <p className="text-body-4 leading-5 text-neutral-300 text-center">
            &copy; 2024 AI Global株式会社. All rights reserved.
          </p>
        </div>
      </div>
      {/* Footer Bottom Image */}
      <div className="w-full bg-neutral-1000">
        <Image
          src="/footer-bottom.png"
          alt="AI Global Footer"
          width={1920}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  )
}