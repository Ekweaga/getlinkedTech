import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
 
  subsets: ['latin'],
  weight:'400'
 
})

export const metadata = {
  title: 'getLinkedTech',
  description: 'GetLinkedTech Hackathon Landing Page',
}

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body className={poppins.className} >{children}</body>
    </html>
  )
}
