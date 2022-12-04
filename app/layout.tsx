'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import AuthLayout from './layouts/AuthLayout'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SessionProvider>
          <div className="min-h-screen bg-gray-800 text-gray-400 text-sm font-mono">
            <AuthLayout>{children}</AuthLayout>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
