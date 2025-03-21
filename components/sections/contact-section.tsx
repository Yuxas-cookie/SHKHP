"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 bg-[#F8F9FA] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="tech-circles opacity-5">
        <div className="tech-circle" />
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
          お問い合わせ
        </motion.h2>
        
        <div className="max-w-xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3 text-black">お名前</label>
              <input
                type="text"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3 text-black">メールアドレス</label>
              <input
                type="email"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm sm:text-base font-medium mb-2 sm:mb-3 text-black">お問い合わせ内容</label>
              <textarea
                rows={6}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white border-2 border-black focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              ></textarea>
            </div>
            <Button
              className="w-full animated-button text-white rounded-none px-4 sm:px-6 py-5 sm:py-7 text-base sm:text-lg"
            >
              <span>送信する</span>
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
