import { Poppins } from 'next/font/google';
import Header from './components/header';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Learning Next 13',
  description: 'Learning Next 13',
  keywords: 'web design, next 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
