"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, User } from 'lucide-react'

export function CompanySection() {
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
      id="company"
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
          企業情報
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
              alt="カジュアルなオフィス環境"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 md:order-2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-black flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-bold text-black">代表者</h3>
              </div>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                代表取締役　片山弘
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-black flex-shrink-0" />
                <h3 className="text-2xl sm:text-3xl font-bold text-black">所在地</h3>
              </div>
              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed">
                〒565-0842
                <br />
                大阪府吹田市千里山東２丁目４−３
                <br />
                リバーサイド千里山 201号室
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}