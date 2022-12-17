'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { queryClient } from '../lib/query'
import '../styles/globals.css'
import AuthLayout from './layouts/AuthLayout'
import { QueryClientProvider } from 'react-query'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-gray-800 text-gray-400 text-sm font-mono">
              <AuthLayout>{children}</AuthLayout>
            </div>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
