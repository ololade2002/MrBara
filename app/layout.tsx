import './globals.css'
import type { Metadata } from 'next'
import { Poppins , Quicksand, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar.jsx'
import Footer from '@/components/Footer/Footer.jsx'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight:['100','200','300','400','500','600','700','800']
})
 
const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
  weight: ['300','400','500','600','700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400','500','600','700'],
  style:['italic','normal'],
})


export const metadata: Metadata = {
  title: 'Mr Bara',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${poppins.variable} ${playfair.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
