'use client'
import { useState, useEffect } from 'react'

export default function ProductPage({ params }) {
  const { id } = params
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]')
    setIsFav(favs.includes(Number(id)))
  }, [id])

  function toggleFav() {
    const favs = JSON.parse(localStorage.getItem('favs') || '[]')
    const idNum = Number(id)
    let updated
    if (favs.includes(idNum)) {
      updated = favs.filter((x) => x !== idNum)
      setIsFav(false)
    } else {
      updated = [...favs, idNum]
      setIsFav(true)
    }
    localStorage.setItem('favs', JSON.stringify(updated))
  }

  if (loading) return <p>Loading...</p>
  if (!product) return <p>Product not found</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
      </div>
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <p className="text-sm text-gray-600 mb-4">Category: {product.category}</p>
        <div className="flex items-center gap-3">
          <button onClick={toggleFav} className="px-4 py-2 border rounded">
            {isFav ? 'Remove Favorite' : 'Add to Favorite'}
          </button>
        </div>
      </div>
    </div>
  )
}