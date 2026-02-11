import { addItem, selectIsInCart } from '../store/cartSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import type { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch()
  const isInCart = useAppSelector(selectIsInCart(product.id))

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">₹ {product.price.toFixed(2)}</p>
      <p style={{minHeight: '3rem'}}>{product.description}</p>
      <button
        className="btn"
        onClick={() => dispatch(addItem({ id: product.id, name: product.name, price: product.price, image: product.image }))}
        disabled={isInCart}
      >
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}