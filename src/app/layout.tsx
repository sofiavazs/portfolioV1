import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import StyledComponentsRegistry from './lib/registry';
import NavigationBar from './components/sections/NavigationBar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sofia Vaz Sousa Portfolio - Software Developer",
  description: "I’m software developer with a 12-year background in healthcare that transitioned into tech. Currently, I'm building human-centered products within e-health.",
  icons :{
    icon: "/assets/favicon.ico"
  }
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
