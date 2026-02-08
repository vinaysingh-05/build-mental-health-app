'use client'

import { motion, useInView } from 'framer-motion'
import { UserPlus, MessageSquare, Brain, Heart } from 'lucide-react'
import { useRef } from 'react'

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: UserPlus,
      number: 1,
      title: 'Create Your Account',
      description:
        'Quick signup, no lengthy forms. Choose your preferences and privacy settings.',
      time: '2 minutes',
    },
    {
      icon: MessageSquare,
      number: 2,
      title: 'Check In Daily',
      description:
        'Chat with AI Friend, log your mood, or track activities. As little or as much as you want.',
      time: '5 minutes',
    },
    {
      icon: Brain,
      number: 3,
      title: 'Receive Personalized Insights',
      description:
        'AI analyzes patterns, detects early stress signals, and provides tailored recommendations.',
      time: 'Ongoing',
    },
    {
      icon: Heart,
      number: 4,
      title: 'Take Action',
      description:
        'Use micro-support tools, play games, or just talk. Build resilience one day at a time.',
      time: 'Your choice',
    },
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            How Friendly Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your journey to better mental health
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mt-8 mb-4 flex justify-center"
                >
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full">
                    <step.icon className="h-8 w-8 text-purple-600" />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
                    {step.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
