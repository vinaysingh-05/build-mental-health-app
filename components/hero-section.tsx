'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Video, AlertCircle, Lock, Heart, Zap, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { QuickHelpModal } from '@/components/quick-help-modal'

export function HeroSection() {
  const [showHelpModal, setShowHelpModal] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const stats = [
    { icon: '10K+', label: 'Students Supported' },
    { icon: '24/7', label: 'AI Support' },
    { icon: '100%', label: 'Private & Secure' },
  ]

  const badges = [
    { icon: Lock, text: 'End-to-End Encrypted' },
    { icon: Heart, text: 'Powered by Claude AI' },
    { icon: Zap, text: 'Instant Response' },
    { icon: GraduationCap, text: 'Student-Focused' },
  ]

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-muted dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-muted/20 rounded-full blur-3xl"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo Display */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
            >
              <Image
                src="/logo.png"
                alt="Friendly Logo"
                width={100}
                height={100}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-center mb-6 max-w-4xl mx-auto"
          >
            <span className="bg-gradient-to-r from-primary via-accent to-muted bg-clip-text text-transparent">
              Your Privacy-First Companion for a Healthier Mind
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-foreground/70 dark:text-gray-300 leading-relaxed mt-6 text-center max-w-3xl mx-auto"
          >
            Detect stress early, prevent burnout, and find your balance with AI-powered support that
            truly understands you. Built for students, designed for wellness.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-8 justify-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-sm text-foreground/60 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/login">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-6 rounded-full text-lg font-bold shadow-2xl hover:shadow-lg transition-all group"
                >
                  Get Started Free
                  <motion.div
                    className="ml-2 h-5 w-5"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-background dark:bg-gray-800 border-2 px-8 py-6 rounded-full text-lg font-semibold hover:border-primary hover:shadow-lg transition-all"
              >
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => setShowHelpModal(true)}
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-8 py-6 rounded-full text-lg font-bold shadow-2xl hover:shadow-lg transition-all animate-pulse hover:animate-none"
              >
                <AlertCircle className="mr-2 h-5 w-5" />
                Quick Help
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-background/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-muted dark:border-muted/50 hover:border-primary dark:hover:border-accent transition-all cursor-pointer shadow-md hover:shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                </motion.div>
                <span className="text-sm font-medium text-foreground dark:text-gray-300">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <QuickHelpModal open={showHelpModal} onOpenChange={setShowHelpModal} />
    </>
  )
}
