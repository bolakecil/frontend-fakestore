'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ProductCard({ product }) {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]')
    setIsFav(favs.includes(product.id))
  }, [product.id])

  function toggleFav(e) {
    e.preventDefault()
    const favs = JSON.parse(localStorage.getItem('favs') || '[]')
    let updated
    if (favs.includes(product.id)) {
      updated = favs.filter((x) => x !== product.id)
      setIsFav(false)
    } else {
      updated = [...favs, product.id]
      setIsFav(true)
    }
    localStorage.setItem('favs', JSON.stringify(updated))
  }

  return (
    <Link href={`/products/${product.id}`} className="block border rounded bg-white p-4 hover:shadow">
      <div className="h-48 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-full object-contain" />
      </div>
      <h3 className="font-medium mb-2 truncate">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-3">${product.price}</p>
      <div className="flex items-center justify-between">
        <button onClick={toggleFav} className="px-3 py-1 border rounded text-sm">
          {isFav ? '★ Favorited' : '☆ Add Favorite'}
        </button>
        <span className="text-xs text-gray-500">View Details →</span>
      </div>
    </Link>
  )
}