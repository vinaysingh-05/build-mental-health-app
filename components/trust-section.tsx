'use client'

import { motion, useInView } from 'framer-motion'
import { Lock, Shield, Heart } from 'lucide-react'
import { useRef } from 'react'

export function TrustSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const cards = [
    {
      icon: Lock,
      title: 'Privacy First',
      description:
        "Your data never leaves your device without explicit consent. We use local storage and end-to-end encryption.",
      tags: ['No tracking', 'No selling', 'No sharing'],
    },
    {
      icon: Shield,
      title: 'Judgment-Free Zone',
      description:
        'A safe space designed to support you, not label you. Anonymous usage supported.',
      tags: ['Your story', 'Your pace', 'Your choice'],
    },
    {
      icon: Heart,
      title: 'Ethical AI',
      description:
        'Powered by Claude AI with safety guidelines, transparency, and bias mitigation built-in.',
      tags: ['Safe', 'Transparent', 'Trustworthy'],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Built on Trust & Privacy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your mental health journey, your rules
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-purple-400 transition-all group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-6 inline-block"
              >
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl group-hover:shadow-xl transition-shadow">
                  <card.icon className="h-8 w-8 text-white" />
                </div>
              </motion.div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {card.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
