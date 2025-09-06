"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Typography } from "@/components/ui/Typography"
import { ArrowRight, Shield, Zap, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-1000">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-shade-100/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-spacing-4 sm:px-spacing-6 lg:px-spacing-8 py-spacing-17">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              as="h1"
              variant="display-2"
              className="text-gradient mb-spacing-6 desktop:text-display-3"
            >
              AI Global LPR事業
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              as="p"
              variant="lead"
              className="mx-auto max-w-3xl mb-spacing-8"
            >
              最先端のナンバープレート認識技術と
              <br className="hidden sm:inline" />
              革新的なデジタルマーケティングソリューションで
              <br className="hidden sm:inline" />
              お客様のビジネスを次のレベルへ導きます
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-spacing-4 justify-center mb-spacing-12"
          >
            <Button size="lg" className="group">
              無料相談を始める
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              サービス詳細を見る
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-spacing-6 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-radius-3 gradient-primary flex items-center justify-center mb-spacing-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h6" textColor="light">
                高精度認識
              </Typography>
              <Typography variant="body-sm" textColor="muted" align="center">
                99.9%の認識精度を実現
              </Typography>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-radius-3 gradient-primary flex items-center justify-center mb-spacing-3">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h6" textColor="light">
                リアルタイム処理
              </Typography>
              <Typography variant="body-sm" textColor="muted" align="center">
                0.1秒以内の高速レスポンス
              </Typography>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-radius-3 gradient-primary flex items-center justify-center mb-spacing-3">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <Typography variant="h6" textColor="light">
                AI最適化
              </Typography>
              <Typography variant="body-sm" textColor="muted" align="center">
                自動学習で継続的に改善
              </Typography>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}