"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { Camera, MessageCircle, Video, TrendingUp, Users, BarChart } from "lucide-react"

const services = [
  {
    title: "LPR事業",
    description: "最先端のAI技術を活用したナンバープレート認識システム",
    icon: Camera,
    features: [
      "99.9%の高精度認識",
      "リアルタイム処理",
      "24時間365日稼働",
      "多言語対応"
    ],
    color: "from-primary to-primary-shade-100",
  },
  {
    title: "SNSコンサルティング",
    description: "戦略的なSNS運用でブランド認知度を最大化",
    icon: MessageCircle,
    features: [
      "ターゲット分析",
      "コンテンツ戦略立案",
      "インフルエンサー連携",
      "ROI最適化"
    ],
    color: "from-primary-tint-100 to-primary",
  },
  {
    title: "動画編集・SNS運用",
    description: "プロフェッショナルな動画制作と効果的な運用代行",
    icon: Video,
    features: [
      "高品質動画制作",
      "ショート動画最適化",
      "投稿スケジュール管理",
      "エンゲージメント向上"
    ],
    color: "from-primary-shade-100 to-primary-tint-100",
  },
]

const stats = [
  { icon: TrendingUp, value: "300%", label: "平均成長率" },
  { icon: Users, value: "500+", label: "導入企業数" },
  { icon: BarChart, value: "99.9%", label: "顧客満足度" },
]

export default function Services() {
  return (
    <section id="services" className="py-spacing-17 bg-neutral-1000 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-spacing-4 sm:px-spacing-6 lg:px-spacing-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-spacing-12"
        >
          <Typography as="h2" variant="display-1" className="text-gradient mb-spacing-4">
            サービス
          </Typography>
          <Typography variant="lead" className="max-w-3xl mx-auto">
            AI技術とデジタルマーケティングの融合で、
            お客様のビジネスに革新的なソリューションを提供
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-8 mb-spacing-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hoverable className="h-full flex flex-col">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-radius-2 bg-gradient-to-r ${service.color} flex items-center justify-center mb-spacing-4`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-gradient">{service.title}</CardTitle>
                  <CardDescription className="text-neutral-200">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-spacing-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="text-primary mr-spacing-2">✓</span>
                        <Typography variant="body-sm" textColor="muted">
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-spacing-6 pt-0">
                  <Button variant="outline" fullWidth>
                    詳細を見る
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-spacing-8 p-spacing-8 rounded-radius-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-spacing-3">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <Typography variant="display-1" className="text-gradient mb-spacing-2">
                {stat.value}
              </Typography>
              <Typography variant="body" textColor="muted">
                {stat.label}
              </Typography>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}