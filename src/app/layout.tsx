import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import NavigationBar from './components/sections/NavigationBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Sofia Vaz Sousa portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <main>
            <NavigationBar />
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
