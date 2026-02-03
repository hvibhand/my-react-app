import Header from '../components/Header'
import { CATEGORIES, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useAppSelector } from '../store/hooks'
import { selectCartCount } from '../store/cartSlice'

export default function ProductsPage() {
  const cartCount = useAppSelector(selectCartCount)
  return (
    <>
      <Header />
      <div className="wrap">
        <h1>House Plants</h1>
        <p className="tagline">Discover air‑purifying, aromatic, and medicinal plants.</p>
        <p className="tagline">Items in cart: {cartCount}</p>

        {CATEGORIES.map(cat => {
          const group = products.filter(p => p.categories.includes(cat))
          if (group.length === 0) return null
          return (
            <section key={cat}>
              <h2 className="kicker">{cat}</h2>
              <div className="product-grid">
                {group.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}