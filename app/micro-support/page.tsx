'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wind,
  Heart,
  BookOpen,
  Activity,
  Moon,
  Smile,
  ArrowLeft,
  Play,
  Pause,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Slider } from '@/components/ui/slider'
import Link from 'next/link'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

export default function MicroSupportPage() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [breathingActive, setBreathingActive] = useState(false)
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale' | 'rest'>('inhale')
  const [moodRating, setMoodRating] = useState([5])

  const tools = [
    {
      id: 'breathing',
      icon: Wind,
      title: 'Breathing Exercise',
      description: 'Box breathing technique to calm your mind',
      gradient: 'from-cyan-500 to-blue-600',
      duration: '5 min',
    },
    {
      id: 'meditation',
      icon: Heart,
      title: 'Meditation',
      description: 'Guided meditation for stress relief',
      gradient: 'from-pink-500 to-rose-600',
      duration: '10 min',
    },
    {
      id: 'journal',
      icon: BookOpen,
      title: 'Gratitude Journal',
      description: 'Write down what you\'re grateful for today',
      gradient: 'from-amber-500 to-orange-600',
      duration: '3 min',
    },
    {
      id: 'mood',
      icon: Smile,
      title: 'Mood Tracker',
      description: 'Log how you\'re feeling right now',
      gradient: 'from-green-500 to-emerald-600',
      duration: '1 min',
    },
    {
      id: 'exercise',
      icon: Activity,
      title: 'Quick Exercise',
      description: 'Short stretches to energize your body',
      gradient: 'from-purple-500 to-indigo-600',
      duration: '7 min',
    },
    {
      id: 'sleep',
      icon: Moon,
      title: 'Sleep Sounds',
      description: 'Relaxing sounds for better sleep',
      gradient: 'from-indigo-500 to-purple-600',
      duration: '30 min',
    },
  ]

  const startBreathing = () => {
    setBreathingActive(true)
    const phases: Array<'inhale' | 'hold' | 'exhale' | 'rest'> = ['inhale', 'hold', 'exhale', 'rest']
    let currentPhase = 0

    const interval = setInterval(() => {
      currentPhase = (currentPhase + 1) % phases.length
      setBreathPhase(phases[currentPhase])
    }, 4000)

    setTimeout(() => {
      clearInterval(interval)
      setBreathingActive(false)
      setSelectedTool(null)
    }, 64000) // 16 cycles * 4 seconds
  }

  const getBreathingScale = () => {
    switch (breathPhase) {
      case 'inhale':
        return 1.5
      case 'hold':
        return 1.5
      case 'exhale':
        return 1
      case 'rest':
        return 1
      default:
        return 1
    }
  }

  const getBreathingText = () => {
    switch (breathPhase) {
      case 'inhale':
        return 'Breathe In'
      case 'hold':
        return 'Hold'
      case 'exhale':
        return 'Breathe Out'
      case 'rest':
        return 'Hold'
      default:
        return 'Ready'
    }
  }

  const renderToolContent = () => {
    switch (selectedTool) {
      case 'breathing':
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Box Breathing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Follow the circle. Breathe in for 4, hold for 4, out for 4, hold for 4.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center h-64 space-y-6">
              <motion.div
                animate={{
                  scale: getBreathingScale(),
                }}
                transition={{
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl"
              >
                <motion.span 
                  key={breathPhase}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-white font-bold text-2xl"
                >
                  {getBreathingText()}
                </motion.span>
              </motion.div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {breathPhase === 'inhale' && 'Inhale deeply through your nose'}
                  {breathPhase === 'hold' && 'Hold your breath comfortably'}
                  {breathPhase === 'exhale' && 'Exhale slowly through your mouth'}
                  {breathPhase === 'rest' && 'Pause before the next breath'}
                </p>
              </div>
            </div>

            {!breathingActive ? (
              <Button
                onClick={startBreathing}
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Breathing Exercise
              </Button>
            ) : (
              <Button
                onClick={() => setBreathingActive(false)}
                size="lg"
                variant="outline"
                className="w-full"
              >
                <Pause className="mr-2 h-5 w-5" />
                Pause
              </Button>
            )}
          </div>
        )

      case 'mood':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">How are you feeling?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Rate your mood from 1 (very low) to 10 (excellent)
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center text-6xl">
                {moodRating[0] <= 3 && '😢'}
                {moodRating[0] > 3 && moodRating[0] <= 5 && '😐'}
                {moodRating[0] > 5 && moodRating[0] <= 7 && '🙂'}
                {moodRating[0] > 7 && '😄'}
              </div>

              <div className="space-y-2">
                <Slider
                  value={moodRating}
                  onValueChange={setMoodRating}
                  max={10}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Very Low</span>
                  <span className="text-2xl font-bold text-purple-600">{moodRating[0]}</span>
                  <span>Excellent</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Save Mood Entry
              </Button>
            </div>
          </div>
        )

      case 'journal':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Gratitude Journal</h3>
              <p className="text-gray-600 dark:text-gray-400">
                What are you grateful for today?
              </p>
            </div>

            <textarea
              placeholder="I'm grateful for..."
              className="w-full h-40 p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            >
              Save Entry
            </Button>
          </div>
        )

      default:
        return (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              This tool is coming soon! Stay tuned for more wellness features.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 p-4 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Wellness Tools
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Choose a tool to support your mental health
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card
                onClick={() => setSelectedTool(tool.id)}
                className={`p-6 cursor-pointer bg-gradient-to-br ${tool.gradient} text-white border-none shadow-xl hover:shadow-2xl transition-all h-full`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-xl">
                      <tool.icon className="h-8 w-8" />
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {tool.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-white/90 flex-1">{tool.description}</p>

                  <Button
                    variant="secondary"
                    className="mt-4 w-full bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Start
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">7</div>
            <div className="text-gray-600 dark:text-gray-400">Days Streak</div>
            <Progress value={70} className="mt-4" />
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">42</div>
            <div className="text-gray-600 dark:text-gray-400">Sessions Completed</div>
            <Progress value={84} className="mt-4" />
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">6.8</div>
            <div className="text-gray-600 dark:text-gray-400">Avg Mood Score</div>
            <Progress value={68} className="mt-4" />
          </Card>
        </motion.div>
      </div>

      {/* Tool Modal */}
      <Dialog open={selectedTool !== null} onOpenChange={() => setSelectedTool(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Wellness Tool</DialogTitle>
          </DialogHeader>
          {renderToolContent()}
        </DialogContent>
      </Dialog>
    </div>
  )
}
