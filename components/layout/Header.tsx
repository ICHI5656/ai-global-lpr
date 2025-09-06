"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "ホーム", href: "#home" },
  { name: "サービス", href: "#services" },
  { name: "特徴", href: "#features" },
  { name: "お問い合わせ", href: "#contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-neutral-1000/90 backdrop-blur-md border-b border-neutral-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-spacing-4 lg:px-spacing-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AI Global Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-header-4 font-bold text-gradient hidden sm:block">
              AI Global
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">メニューを開く</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-spacing-7">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-body-7 font-semibold leading-6 text-neutral-100 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#contact"
            className="text-body-7 font-semibold leading-6 text-primary hover:text-primary-tint-100 transition-colors"
          >
            無料相談 <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-1000 px-spacing-4 py-spacing-4 sm:max-w-sm sm:ring-1 sm:ring-neutral-800">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="AI Global Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-header-4 font-bold text-gradient">
                AI Global
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">メニューを閉じる</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-spacing-6 flow-root">
            <div className="-my-6 divide-y divide-neutral-800">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-body-7 font-semibold leading-7 text-neutral-100 hover:bg-neutral-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-body-7 font-semibold leading-7 text-primary hover:bg-neutral-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  無料相談
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}