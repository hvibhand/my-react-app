import { Link, useLocation } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import { selectCartCount } from '../store/cartSlice'

export default function Header() {
  const count = useAppSelector(selectCartCount)
  const { pathname } = useLocation()

  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="Go to landing">
        <span style={{fontSize: '1.25rem'}}>🌿 Paradise Nursery</span>
      </Link>
      <div className="tagline">Bring nature home</div>
      <nav className="nav">
        {pathname !== '/plants' && <Link className="link" to="/plants">Plants</Link>}
        {pathname !== '/cart' && (
          <Link className="link" to="/cart" aria-label="Cart">
            <span className="cart-badge">🛒 {count}</span>
          </Link>
        )}
      </nav>
    </header>
  )
}