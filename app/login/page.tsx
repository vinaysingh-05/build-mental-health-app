'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('login')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    '10,000+ students trust Friendly',
    '24/7 AI-powered support',
    '100% private and secure',
  ]

  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      localStorage.setItem('token', data.token)
      router.push('/ai-friend')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      localStorage.setItem('token', data.token)
      router.push('/ai-friend')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Decorative */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary via-accent to-secondary p-12 flex-col justify-between relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
        </div>

        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2 text-white group">
            <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            </motion.div>
            <motion.span className="group-hover:translate-x-1 transition-transform" whileHover={{ letterSpacing: 0.5 }}>
              Back to Home
            </motion.span>
          </Link>
        </motion.div>

        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1], y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
            className="mb-8 flex justify-center"
          >
            <Image src="/logo.png" alt="Friendly Logo" width={120} height={120} />
          </motion.div>

          <motion.h1 
            className="text-5xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Welcome to Friendly
          </motion.h1>
          <motion.p 
            className="text-2xl text-white/90 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Your mental wellness journey starts here
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-xl text-white/90 min-h-8"
            >
              {testimonials[currentTestimonial]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="relative z-10 text-center text-white/70 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Trusted by students worldwide
        </motion.div>
      </motion.div>

      {/* Right Side - Login/Signup Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background dark:bg-gray-900"
      >
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile Logo */}
          <motion.div 
            className="lg:hidden mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image src="/logo.png" alt="Friendly Logo" width={80} height={80} className="mx-auto mb-4" />
              </motion.div>
            </Link>
            <motion.h1 
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome to Friendly
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 shadow-2xl border-2 overflow-hidden">
              {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm">{error}</div>}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login" className="text-lg">Login</TabsTrigger>
                  <TabsTrigger value="signup" className="text-lg">Sign Up</TabsTrigger>
                </TabsList>

                {/* Login Form */}
                <AnimatePresence mode="wait">
                  {activeTab === 'login' && (
                    <TabsContent value="login" forceMount className="m-0">
                      <motion.div
                        key="login"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <form onSubmit={handleLogin} className="space-y-6">
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} whileHover={{ scale: 1.02 }}>
                            <Label htmlFor="login-email" className="text-base font-semibold">Email</Label>
                            <motion.div className="relative mt-2">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                              <Input id="login-email" type="email" placeholder="your.email@university.edu" className="pl-10 h-12 text-base border-2 border-muted focus:border-primary transition-colors" required />
                            </motion.div>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} whileHover={{ scale: 1.02 }}>
                            <Label htmlFor="login-password" className="text-base font-semibold">Password</Label>
                            <motion.div className="relative mt-2">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                              <Input id="login-password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="pl-10 pr-10 h-12 text-base border-2 border-muted focus:border-primary transition-colors" required />
                              <motion.button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                              </motion.button>
                            </motion.div>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="flex items-center justify-between">
                            <motion.label className="flex items-center gap-2 text-sm cursor-pointer" whileHover={{ x: 2 }}>
                              <input type="checkbox" className="rounded border-2 border-muted" />
                              Remember me
                            </motion.label>
                            <Link href="#" className="text-sm text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">Forgot password?</Link>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button type="submit" disabled={loading} className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all">
                              {loading ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>⏳</motion.span> : 'Login'}
                            </Button>
                          </motion.div>
                        </form>
                      </motion.div>
                    </TabsContent>
                  )}
                </AnimatePresence>

                {/* Signup Form */}
                <AnimatePresence mode="wait">
                  {activeTab === 'signup' && (
                    <TabsContent value="signup" forceMount className="m-0">
                      <motion.div
                        key="signup"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <form onSubmit={handleSignup} className="space-y-6">
                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} whileHover={{ scale: 1.02 }}>
                            <Label htmlFor="signup-name" className="text-base font-semibold">Full Name</Label>
                            <motion.div className="relative mt-2">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                              <Input id="signup-name" type="text" placeholder="John Doe" className="pl-10 h-12 text-base border-2 border-muted focus:border-primary transition-colors" required />
                            </motion.div>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 }} whileHover={{ scale: 1.02 }}>
                            <Label htmlFor="signup-email" className="text-base font-semibold">Email</Label>
                            <motion.div className="relative mt-2">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                              <Input id="signup-email" type="email" placeholder="your.email@university.edu" className="pl-10 h-12 text-base border-2 border-muted focus:border-primary transition-colors" required />
                            </motion.div>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} whileHover={{ scale: 1.02 }}>
                            <Label htmlFor="signup-password" className="text-base font-semibold">Password</Label>
                            <motion.div className="relative mt-2">
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
                              <Input id="signup-password" type={showPassword ? 'text' : 'password'} placeholder="Create a strong password" className="pl-10 pr-10 h-12 text-base border-2 border-muted focus:border-primary transition-colors" required />
                              <motion.button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                              </motion.button>
                            </motion.div>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="flex items-start gap-2">
                            <input type="checkbox" className="mt-1 rounded" required />
                            <label className="text-sm text-foreground/70">
                              I agree to the Terms of Service and Privacy Policy. I understand my data is encrypted and private.
                            </label>
                          </motion.div>

                          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button type="submit" disabled={loading} className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all">
                              {loading ? <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>⏳</motion.span> : 'Create Account'}
                            </Button>
                          </motion.div>
                        </form>
                      </motion.div>
                    </TabsContent>
                  )}
                </AnimatePresence>
              </Tabs>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
