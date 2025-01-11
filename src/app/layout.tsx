import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import Footer from '@/components/footer'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PawShelter - Give Them a Place to Call Home',
  description: 'Help us provide shelter, care, and love to street dogs. Every donation makes a difference in their lives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={mulish.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

      <Header />
        {children}
        <Footer />
        </ThemeProvider></body>
    </html>
  )
}