

import Providers from './Providers'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEXT MOVIE',
  description: 'This is the IMDb clone website',
  icons: {
    icon: '/favicon.ico'
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
        
<Providers>
  
        {/* Header */}
        <Header/>
        {/* Nav */}
        <Navbar/>
        {/* SearchBox */}
        {children}
</Providers>
       
      </body>
    </html>
  )
}
