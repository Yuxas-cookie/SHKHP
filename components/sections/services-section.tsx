"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card } from '@/components/ui/card'
import { GraduationCap, Palette } from 'lucide-react'

export function ServicesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: GraduationCap,
      title: "AIエンジニア講座",
      description: "プログラミング未経験者でも、AI技術を活用することで、日々の業務を1/5に効率化し、会社全体の作業負荷を大幅に軽減できるシステムの開発スキルを習得を目指します。実践的なカリキュラムを通じ、基礎から応用まで幅広い知識と技術を身につけ、一社に1人のAI人材を育成します。"
    },
    {
      icon: Palette,
      title: "AIクリエイティブ講座",
      description: "画像生成AIを利用した電子書籍の作成やバナーのデザイン技術を学び、クリエイティブなコンテンツ制作の幅を広げます。さらに、効果的な販売戦略とマーケティング手法を組み合わせ、魅力的なコンテンツをビジネス成果に直結させるための実践的なスキルを養成します。"
    }
  ]

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="tech-lines opacity-5">
        <div className="tech-line" />
        <div className="tech-line" />
      </div>
      
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          事業内容
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-6 sm:p-8 bg-white hover:shadow-2xl transition-all duration-300 border-none relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-black transform origin-left scale-x-0 transition-transform group-hover:scale-x-100" />
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-black transition-transform group-hover:scale-110" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-black">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}