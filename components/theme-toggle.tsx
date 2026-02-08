'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Sun className="h-5 w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          const newTheme = theme === 'light' ? 'dark' : 'light'
          setTheme(newTheme)
        }}
        className="relative rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <motion.div
            initial={false}
            animate={{
              scale: theme === 'light' ? 1 : 0,
              opacity: theme === 'light' ? 1 : 0,
              rotate: theme === 'light' ? 0 : 180,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute"
          >
            <Sun className="h-5 w-5 text-amber-500" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{
              scale: theme === 'dark' ? 1 : 0,
              opacity: theme === 'dark' ? 1 : 0,
              rotate: theme === 'dark' ? 0 : -180,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute"
          >
            <Moon className="h-5 w-5 text-blue-400" />
          </motion.div>
        </div>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
