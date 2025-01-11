import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'


const mulish = Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PawShelter - Give Them a Place to Call Home',
  description: 'Help us provide shelter, care, and love to street dogs. Every donation makes a difference in their lives.',
  keywords: 'dog shelter, animal rescue, street dogs, adopt a pet, donate for animals, animal care, shelter for dogs',
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

 
        {children}
        <Toaster />
        </ThemeProvider></body>
    </html>
  )
}