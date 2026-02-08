'use client'

import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MessageCircle,
  Wind,
  Activity,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Heart,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import Link from 'next/link'

interface QuickHelpModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuickHelpModal({ open, onOpenChange }: QuickHelpModalProps) {
  const [copied, setCopied] = useState<string | null>(null)

  const copyNumber = (number: string, id: string) => {
    navigator.clipboard.writeText(number)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7, free and confidential support',
      id: 'suicide',
    },
    {
      name: 'Crisis Text Line',
      number: 'Text "HELLO" to 741741',
      description: 'Text-based crisis support',
      id: 'text',
    },
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      description: 'Mental health & substance abuse',
      id: 'samhsa',
    },
    {
      name: 'Trevor Project (LGBTQ+)',
      number: '1-866-488-7386',
      description: 'Crisis support for LGBTQ+ youth',
      id: 'trevor',
    },
  ]

  const quickTools = [
    {
      icon: Wind,
      title: '5-4-3-2-1 Grounding',
      description: 'Calm anxiety in 2 minutes',
      color: 'from-emerald-500 to-teal-600',
      action: '/micro-support',
    },
    {
      icon: Activity,
      title: 'Box Breathing',
      description: '4-4-4-4 breathing technique',
      color: 'from-blue-500 to-cyan-600',
      action: '/micro-support',
    },
    {
      icon: Heart,
      title: 'Talk to AI Friend',
      description: 'Non-judgmental listening',
      color: 'from-purple-500 to-pink-600',
      action: '/ai-friend',
    },
    {
      icon: MessageCircle,
      title: 'Mood Check-In',
      description: 'Track how you feel',
      color: 'from-orange-500 to-red-600',
      action: '/micro-support',
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              You Are Not Alone
            </span>
          </DialogTitle>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg">
            {'Immediate support is available. We\'re here for you.'}
          </p>
        </DialogHeader>

        <Tabs defaultValue="emergency" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="emergency" className="text-base">
              Emergency Contacts
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-base">
              Quick Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="emergency" className="space-y-4">
            <div className="grid gap-4">
              {emergencyContacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="font-bold text-lg">{contact.name}</h3>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {contact.number}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.description}
                      </p>
                    </div>
                    <Button
                      onClick={() => copyNumber(contact.number, contact.id)}
                      className="shrink-0"
                      variant="outline"
                      size="sm"
                    >
                      {copied === contact.id ? (
                        <>
                          <Check className="mr-2 h-4 w-4 text-green-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-5 bg-red-50 dark:bg-red-900/20 border-2 border-red-400 dark:border-red-600 rounded-xl mt-6">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-red-600 dark:text-red-400 mt-1 shrink-0" />
                <div>
                  <p className="font-bold text-red-700 dark:text-red-400 text-lg mb-1">
                    Emergency Services
                  </p>
                  <p className="text-red-700 dark:text-red-400">
                    If you&apos;re in immediate danger, call <strong>911</strong> or go to your
                    nearest emergency room immediately.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
              Try these instant wellness tools to help you feel better right now
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={tool.action} onClick={() => onOpenChange(false)}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 bg-gradient-to-br ${tool.color} rounded-full group-hover:scale-110 transition-transform`}
                        >
                          <tool.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                            {tool.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {tool.description}
                          </p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 mt-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-bold text-lg mb-2">Need to Talk?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Email our support team at{' '}
                <a
                  href="mailto:support@friendly.com"
                  className="font-semibold text-purple-600 hover:underline"
                >
                  support@friendly.com
                </a>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                We typically respond within 1 hour
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
