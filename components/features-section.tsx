'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Activity, Gamepad2, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: MessageCircle,
      title: 'Your 24/7 AI Companion',
      description:
        'Chat with an empathetic AI that listens without judgment, understands context, remembers your conversations, and provides personalized emotional support anytime you need it.',
      features: [
        'Natural conversations',
        'Emotional intelligence',
        'Privacy-first design',
        'Crisis detection & support',
      ],
      gradient: 'from-blue-500 to-purple-600',
      ctaText: 'Start Chatting Now',
      ctaLink: '/ai-friend',
      badge: 'AI-Powered',
    },
    {
      icon: Activity,
      title: 'Personalized Wellness Tools',
      description:
        'Access a comprehensive toolkit designed to help you manage stress, track mood, and build healthy habits every day.',
      features: [
        'Guided breathing exercises',
        'Mood & stress tracking',
        'Meditation library',
        'Gratitude journaling',
        'Sleep & energy insights',
        'Personalized recommendations',
      ],
      gradient: 'from-emerald-500 to-teal-600',
      ctaText: 'Explore Tools',
      ctaLink: '/micro-support',
      badge: 'Evidence-Based',
    },
    {
      icon: Gamepad2,
      title: 'Games, Stories & Joy',
      description:
        'Take a mental break with carefully curated activities designed to lift your spirits, provide distraction, and bring genuine joy to your day.',
      features: [
        'Interactive mini-games',
        'Choose-your-own-adventure stories',
        'Comedy & jokes',
        'Lo-fi music & playlists',
        'Curated YouTube shorts',
        'Affirmations & positivity',
        'Zen environments',
        'Creative outlets',
      ],
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
      ctaText: 'Enter Fun Zone',
      ctaLink: '/funzone',
      badge: 'Most Popular',
      special: true,
    },
  ]

  return (
    <section id="features" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Tools for Your Mental Wellness
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need, all in one place
          </p>
          <div className="mt-4 h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-10 bg-gradient-to-br ${feature.gradient} text-white overflow-hidden group ${
                feature.special ? 'ring-4 ring-pink-400 ring-offset-4' : ''
              }`}
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
              
              {/* Badge */}
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                {feature.badge}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <feature.icon className="h-16 w-16" />
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>

                {/* Description */}
                <p className="text-lg leading-relaxed opacity-90 mb-6">{feature.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-xl">✓</span>
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={feature.ctaLink}>
                  <Button
                    size="lg"
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-lg rounded-full group/btn"
                  >
                    {feature.ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Special Effect for Fun Zone */}
              {feature.special && (
                <motion.div
                  className="absolute top-0 right-0 opacity-30"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                >
                  <Sparkles className="h-24 w-24" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
