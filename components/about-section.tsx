'use client'

import { motion, useInView } from 'framer-motion'
import { Shield, Heart, Brain, Sparkles, Target, Smile } from 'lucide-react'
import { useRef } from 'react'

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Target,
      title: 'Preventive Focus',
      description:
        'Unlike reactive therapy-focused tools, Friendly detects early stress signals and burnout patterns before they escalate, helping you stay ahead of mental health challenges.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smile,
      title: 'The Fun Zone',
      description:
        'Immediate mental refreshment through curated storytelling, jokes, stand-up comedy, and movies designed to reset your mind and bring joy back into your day.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      title: 'Logical AI Companion',
      description:
        'Rule-based AI analyzes your mood, sleep quality, and academic load to categorize stress levels and offer personalized, friend-like support that truly understands you.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'Privacy-First',
      description:
        'Your data remains fully confidential. We prioritize your privacy to help overcome the social stigma often associated with seeking mental health support.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
              <Heart className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Friendly
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance leading-relaxed">
            Your privacy-first, interactive mental health companion designed to act as a{' '}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              mentalist friend
            </span>{' '}
            rather than a clinical therapist. We empower students through logical support and
            entertainment-based relief.
          </p>
        </motion.div>

        {/* Core Idea Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1"
        >
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="h-10 w-10 text-purple-600 shrink-0" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  The Core Idea: Friendly Mental Health Helper
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A revolutionary approach to student mental wellness that focuses on{' '}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    prevention over intervention
                  </span>
                  . Friendly combines logical AI analysis with entertainment-based therapy to create
                  a supportive environment where students can thrive without judgment or stigma.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none from-blue-500 to-purple-600" />

              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {feature.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-purple-200 dark:border-purple-800">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Join thousands of students who are taking control of their mental wellness with
              Friendly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
