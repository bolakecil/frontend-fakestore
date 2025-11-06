'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const path = usePathname()
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">FakeStore</Link>
        <div className="flex items-center gap-4">
          <Link href="/" className={path === '/' ? 'font-semibold' : ''}>Home</Link>
          <Link href="/contact" className={path === '/contact' ? 'font-semibold' : ''}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}