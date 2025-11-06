import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'FakeStore Showcase',
  description: 'A small product showcase using fakestoreapi.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}