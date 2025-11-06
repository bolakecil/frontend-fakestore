import ProductCard from '../components/ProductCard'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products?limit=5', { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Product Showcase</h1>

      <div className="mb-6">
        <input id="search" placeholder="Search products..." className="w-full p-2 border rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}