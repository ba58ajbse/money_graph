import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen bg-gray-800 text-gray-400 text-sm font-mono">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
