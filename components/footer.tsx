'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRef, useState } from 'react'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const [showLinkedInMenu, setShowLinkedInMenu] = useState(false)
  const [showMailMenu, setShowMailMenu] = useState(false)

  return (
    <footer ref={ref} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Friendly Logo" width={40} height={40} />
              <span className="text-xl font-bold">Friendly</span>
            </div>

            <p className="text-gray-400 mb-4">
              Mental wellness redefined for students
            </p>

            <div className="flex gap-3">

              {/* Twitter */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>

              {/* LinkedIn Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={() => {
                    setShowLinkedInMenu(!showLinkedInMenu)
                    setShowMailMenu(false)
                  }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.button>

                {showLinkedInMenu && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-56 z-50">
                    <a
                      href="https://www.linkedin.com/in/vinay-kumar0805/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      Vinay Kumar
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bhavyaa-bansal-0b5170334"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      Bhavyaa Bansal
                    </a>
                  </div>
                )}
              </div>

              {/* Mail Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={() => {
                    setShowMailMenu(!showMailMenu)
                    setShowLinkedInMenu(false)
                  }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </motion.button>

                {showMailMenu && (
                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-64 z-50">
                    <a
                      href="mailto:vinay0805@gmail.com"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      Vinay Kumar
                      <span className="block text-xs text-gray-400">
                        vk8964210@gmail.com                    </span>
                    </a>

                    <a
                      href="mailto:bhavyaa@example.com"
                      className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      Bhavyaa Bansal
                      <span className="block text-xs text-gray-400">
                       bhavyaabansal22@gmail.com
                      </span>
                    </a>
                  </div>
                )}
              </div>

            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              {['AI Friend', 'Micro-Support', 'Fun Zone', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Crisis Helplines',
                'Mental Health Guide',
                'Privacy Policy',
                'Terms of Service',
                'FAQs',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4">Get Help</h3>
            <ul className="space-y-2 mb-4">
              {['Contact Us', 'Report Bug', 'Feature Requests'].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p className="text-sm mb-2">MAIL:</p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  SEND
                </Button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>
            © 2026 Friendly. All rights reserved. | Made with 💜 for students |
            Making by CODEX - Vinay Kumar & Bhavyaa Bansal
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
