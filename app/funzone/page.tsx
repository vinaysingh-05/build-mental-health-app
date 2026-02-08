'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Gamepad2,
  BookOpen,
  Laugh,
  Music,
  Sparkles,
  Heart,
  Palette,
  ArrowLeft,
  Dices,
  Play,
  RotateCcw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function FunZonePage() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)
  const [gameScore, setGameScore] = useState(0)
  const [joke, setJoke] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activities = [
    {
      id: 'games',
      icon: Gamepad2,
      title: 'Quick Games',
      description: 'Fun mini-games to lift your mood',
      gradient: 'from-pink-500 to-rose-600',
      emoji: '🎮',
    },
    {
      id: 'stories',
      icon: BookOpen,
      title: 'Stories',
      description: 'Choose-your-own-adventure tales',
      gradient: 'from-purple-500 to-indigo-600',
      emoji: '📖',
    },
    {
      id: 'jokes',
      icon: Laugh,
      title: 'Comedy',
      description: 'Jokes and funny content',
      gradient: 'from-yellow-500 to-orange-600',
      emoji: '😄',
    },
    {
      id: 'music',
      icon: Music,
      title: 'Chill Music',
      description: 'Lo-fi beats and relaxing playlists',
      gradient: 'from-blue-500 to-cyan-600',
      emoji: '🎵',
    },
    {
      id: 'affirmations',
      icon: Heart,
      title: 'Affirmations',
      description: 'Positive messages for your day',
      gradient: 'from-red-500 to-pink-600',
      emoji: '💖',
    },
    {
      id: 'creative',
      icon: Palette,
      title: 'Creative Corner',
      description: 'Drawing and creative activities',
      gradient: 'from-teal-500 to-green-600',
      emoji: '🎨',
    },
  ]

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a can opener that doesn't work? A can't opener!",
  ]

  const affirmations = [
    "You are capable of amazing things.",
    "Your feelings are valid and important.",
    "You deserve happiness and peace.",
    "You are stronger than you think.",
    "It's okay to take things one step at a time.",
    "You are enough, just as you are.",
    "Your mental health matters.",
    "You have the power to create positive change.",
  ]

  const getRandomJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    setJoke(randomJoke)
  }

  const [affirmation, setAffirmation] = useState(affirmations[0])

  const getRandomAffirmation = () => {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    setAffirmation(randomAffirmation)
  }

  const [clickerCount, setClickerCount] = useState(0)
  const [clickerTarget] = useState(50)

  const renderActivityContent = () => {
    switch (selectedActivity) {
      case 'games':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Mood Clicker</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Click the button as fast as you can! Release some energy!
              </p>
            </div>

            <motion.div
              className="flex justify-center"
              animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={() => setClickerCount((prev) => prev + 1)}
                size="lg"
                className="w-32 h-32 rounded-full text-6xl bg-gradient-to-br from-pink-500 to-purple-600 hover:scale-110 transition-transform"
              >
                {clickerCount >= clickerTarget ? '🎉' : '😊'}
              </Button>
            </motion.div>

            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-purple-600">{clickerCount}</div>
              <div className="text-gray-600 dark:text-gray-400">
                {clickerCount >= clickerTarget
                  ? 'Amazing! You did it! 🎊'
                  : `Keep going! Target: ${clickerTarget}`}
              </div>
            </div>

            <Button
              onClick={() => setClickerCount(0)}
              variant="outline"
              size="lg"
              className="w-full"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset Game
            </Button>
          </div>
        )

      case 'jokes':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Comedy Corner</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Everyone needs a good laugh!
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={joke}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-8 text-center min-h-[200px] flex items-center justify-center"
              >
                <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">
                  {joke || 'Click the button below to get a joke!'}
                </p>
              </motion.div>
            </AnimatePresence>

            <Button
              onClick={getRandomJoke}
              size="lg"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
            >
              <Laugh className="mr-2 h-5 w-5" />
              Tell Me a Joke!
            </Button>
          </div>
        )

      case 'affirmations':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Daily Affirmations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Positive thoughts for a positive mind
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={affirmation}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 rounded-2xl p-12 text-center min-h-[250px] flex items-center justify-center"
              >
                <div className="space-y-4">
                  <Heart className="h-12 w-12 mx-auto text-red-500" />
                  <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    {affirmation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <Button
              onClick={getRandomAffirmation}
              size="lg"
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              New Affirmation
            </Button>
          </div>
        )

      case 'music':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Chill Music</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Relax with some lo-fi beats
              </p>
            </div>

            <div className="space-y-4">
              {['Lo-fi Hip Hop', 'Peaceful Piano', 'Nature Sounds', 'Ambient Chill'].map(
                (playlist, index) => (
                  <Card
                    key={index}
                    className="p-4 flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                        <Music className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">{playlist}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Relaxing vibes
                        </p>
                      </div>
                    </div>
                    <Button size="sm" className="rounded-full">
                      <Play className="h-4 w-4" />
                    </Button>
                  </Card>
                )
              )}
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              This activity is coming soon! Stay tuned for more fun features.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20">
      {/* Floating Sparkles */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'linear',
              }}
            >
              <Sparkles className="h-6 w-6 text-yellow-400 opacity-50" />
            </motion.div>
          ))}
        </div>
      )}

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 p-4 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Fun Zone
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Take a break and have some fun!
              </p>
            </div>
          </div>
          <Sparkles className="h-8 w-8 text-pink-500 animate-pulse" />
        </div>
      </motion.header>

      {/* Activities Grid */}
      <div className="relative z-10 max-w-7xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Choose Your Adventure!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Pick an activity to brighten your day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Card
                onClick={() => setSelectedActivity(activity.id)}
                className={`p-6 cursor-pointer bg-gradient-to-br ${activity.gradient} text-white border-none shadow-2xl hover:shadow-pink-500/50 transition-all h-full relative overflow-hidden`}
              >
                <motion.div
                  className="absolute top-0 right-0 text-8xl opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: 'linear' }}
                >
                  {activity.emoji}
                </motion.div>

                <div className="relative z-10">
                  <div className="p-3 bg-white/20 rounded-xl inline-block mb-4">
                    <activity.icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-white/90 mb-4">{activity.description}</p>

                  <Button variant="secondary" className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Let's Go!
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Modal */}
      <Dialog open={selectedActivity !== null} onOpenChange={() => setSelectedActivity(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Fun Activity</DialogTitle>
          </DialogHeader>
          {renderActivityContent()}
        </DialogContent>
      </Dialog>
    </div>
  )
}
