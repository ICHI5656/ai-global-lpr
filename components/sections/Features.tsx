"use client"

import { motion } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { 
  Shield, 
  Zap, 
  Globe, 
  Lock, 
  Cloud, 
  Cpu,
  LineChart,
  Settings,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "高度なセキュリティ",
    description: "エンタープライズグレードのセキュリティで、お客様のデータを完全に保護します。",
  },
  {
    icon: Zap,
    title: "超高速処理",
    description: "最新のAIアルゴリズムにより、ミリ秒単位での処理を実現。",
  },
  {
    icon: Globe,
    title: "グローバル対応",
    description: "多言語・多地域対応で、世界中どこでもご利用いただけます。",
  },
  {
    icon: Lock,
    title: "プライバシー保護",
    description: "GDPR準拠、個人情報保護法対応で安心してご利用いただけます。",
  },
  {
    icon: Cloud,
    title: "クラウド統合",
    description: "主要なクラウドサービスとシームレスに連携可能。",
  },
  {
    icon: Cpu,
    title: "AI自動最適化",
    description: "機械学習により、使用するたびに精度が向上します。",
  },
  {
    icon: LineChart,
    title: "詳細な分析",
    description: "リアルタイムダッシュボードで、詳細な分析データを提供。",
  },
  {
    icon: Settings,
    title: "カスタマイズ可能",
    description: "お客様のニーズに合わせて、柔軟にカスタマイズ可能。",
  },
  {
    icon: Smartphone,
    title: "モバイル対応",
    description: "スマートフォン、タブレットからでも快適に利用可能。",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-spacing-17 bg-gradient-to-b from-neutral-1000 via-neutral-900 to-neutral-1000">
      <div className="mx-auto max-w-7xl px-spacing-4 sm:px-spacing-6 lg:px-spacing-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-spacing-12"
        >
          <Typography as="h2" variant="display-1" className="text-gradient mb-spacing-4">
            特徴
          </Typography>
          <Typography variant="lead" className="max-w-3xl mx-auto">
            業界をリードする技術と機能で、
            お客様のビジネスに最大の価値を提供
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-spacing-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative p-spacing-6 rounded-radius-3 bg-neutral-900/50 border border-neutral-800 hover:border-primary/50 transition-all duration-300">
                <div className="absolute inset-0 rounded-radius-3 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-radius-2 gradient-primary flex items-center justify-center mb-spacing-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <Typography variant="h5" textColor="light" className="mb-spacing-2">
                    {feature.title}
                  </Typography>
                  
                  <Typography variant="body-sm" textColor="muted">
                    {feature.description}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-spacing-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-spacing-8 rounded-radius-4 bg-gradient-to-r from-primary/10 to-primary-shade-100/10 border border-primary/20">
            <div className="max-w-2xl">
              <Typography variant="h3" className="text-gradient mb-spacing-4">
                エンタープライズ対応
              </Typography>
              <Typography variant="body" textColor="muted" className="mb-spacing-6">
                大規模なエンタープライズ環境にも対応可能な、
                スケーラブルで信頼性の高いソリューションを提供します。
              </Typography>
              <div className="flex flex-wrap justify-center gap-spacing-4 text-body-6 text-neutral-200">
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-success mr-2" />
                  99.99% アップタイム
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-success mr-2" />
                  24/7 サポート
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-success mr-2" />
                  SLA保証
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}