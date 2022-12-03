'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SessionProvider>
          <div className="min-h-screen bg-gray-800 text-gray-400 text-sm font-mono">
            <Header />
            {children}
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
