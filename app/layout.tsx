'use client'

import { ColorModeScript } from '@chakra-ui/react'
import { ReactNode } from 'react'
import theme from '../lib/theme'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </body>
    </html>
  )
}
