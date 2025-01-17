import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Amey Pathe',
  description: 'Portfolio website of Amey Pathe, a full-stack developer based in Pune.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
       <Analytics/> 
      </body>
    </html>
  )
}
