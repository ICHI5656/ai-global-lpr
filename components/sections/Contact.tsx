"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/ui/Typography"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の送信処理を実装
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "メール",
      info: "info@aiglobal.jp",
      link: "mailto:info@aiglobal.jp",
    },
    {
      icon: Phone,
      title: "電話",
      info: "03-1234-5678",
      link: "tel:03-1234-5678",
    },
    {
      icon: MapPin,
      title: "所在地",
      info: "東京都港区",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-spacing-17 bg-neutral-1000 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-shade-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-spacing-4 sm:px-spacing-6 lg:px-spacing-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-spacing-12"
        >
          <Typography as="h2" variant="display-1" className="text-gradient mb-spacing-4">
            お問い合わせ
          </Typography>
          <Typography variant="lead" className="max-w-3xl mx-auto">
            サービスに関するご質問やご相談は、お気軽にお問い合わせください。
            専門スタッフが丁寧にご対応いたします。
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-spacing-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-spacing-6"
          >
            <div>
              <Typography variant="h4" color="light" className="mb-spacing-4">
                お問い合わせ情報
              </Typography>
              <Typography variant="body" color="muted" className="mb-spacing-6">
                ご不明な点がございましたら、以下の連絡先までお気軽にお問い合わせください。
              </Typography>
            </div>

            <div className="space-y-spacing-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  className="flex items-start gap-spacing-3 p-spacing-4 rounded-radius-2 hover:bg-neutral-900 transition-colors"
                >
                  <div className="w-10 h-10 rounded-radius-2 gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <Typography variant="body-sm" color="muted">
                      {item.title}
                    </Typography>
                    <Typography variant="body" color="light">
                      {item.info}
                    </Typography>
                  </div>
                </a>
              ))}
            </div>

            <Card variant="gradient" className="mt-spacing-6">
              <CardContent className="p-spacing-6">
                <Typography variant="h5" className="text-white mb-spacing-2">
                  営業時間
                </Typography>
                <Typography variant="body" className="text-white/90">
                  平日 9:00 - 18:00
                  <br />
                  土日祝 休業
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-spacing-8">
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-spacing-12"
                  >
                    <CheckCircle className="h-16 w-16 text-success mb-spacing-4" />
                    <Typography variant="h4" color="light" className="mb-spacing-2">
                      送信完了しました
                    </Typography>
                    <Typography variant="body" color="muted">
                      お問い合わせありがとうございます。担当者より連絡させていただきます。
                    </Typography>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-spacing-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-6">
                      <div>
                        <label htmlFor="name" className="block text-body-6 font-medium text-neutral-100 mb-spacing-2">
                          お名前 <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-spacing-4 py-spacing-3 rounded-radius-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-body-6 font-medium text-neutral-100 mb-spacing-2">
                          会社名
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-spacing-4 py-spacing-3 rounded-radius-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-6">
                      <div>
                        <label htmlFor="email" className="block text-body-6 font-medium text-neutral-100 mb-spacing-2">
                          メールアドレス <span className="text-error">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-spacing-4 py-spacing-3 rounded-radius-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-body-6 font-medium text-neutral-100 mb-spacing-2">
                          電話番号
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-spacing-4 py-spacing-3 rounded-radius-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-body-6 font-medium text-neutral-100 mb-spacing-2">
                        ご興味のあるサービス
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-spacing-4 py-spacing-3 rounded-radius-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">選択してください</option>
                        <option value="lpr">LPR事業</option>
                        <option value="sns-consulting">SNSコンサルティング</option>
                        <option value="video-editing">動画編集</option>
                        <option value="sns-management">SNS運用</option>
                        <option value="other">その他</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-body-6 font-medium text-neutral-100 mb-spacing-2">
                        お問い合わせ内容 <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-spacing-4 py-spacing-3 rounded-radius-2 bg-neutral-900 border border-neutral-700 text-neutral-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" size="lg" className="group">
                        送信する
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}