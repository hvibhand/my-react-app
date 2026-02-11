import Header from '../components/Header'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectCartLines, selectCartSubtotal, updateQuantity, removeItem } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const lines = useAppSelector(selectCartLines)
  const subtotal = useAppSelector(selectCartSubtotal)
  const dispatch = useAppDispatch()

  const inc = (id: number, qty: number) => dispatch(updateQuantity({ id, qty: qty + 1 }))
  const dec = (id: number, qty: number) => {
    const newQty = qty - 1
    if (newQty <= 0) dispatch(removeItem(id))
    else dispatch(updateQuantity({ id, qty: newQty }))
  }

  return (
    <>
      <Header />
      <div className="wrap">
        <h1>Your Cart</h1>

        {lines.length === 0 ? (
          <p>Your cart is empty. <Link to="/plants">Continue shopping</Link></p>
        ) : (
          <>
            <table className="table">
              <thead>
              <tr>
                <th colSpan={2}>Item</th>
                <th>Unit</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {lines.map(l => (
                <tr key={l.id}>
                  <td style={{width: 70}}><img src={l.image} alt={l.name} style={{width: 60, height: 60, objectFit: 'cover', borderRadius: 8}} /></td>
                  <td>{l.name}</td>
                  <td className="price">₹ {l.price.toFixed(2)}</td>
                  <td>
                    <div className="actions">
                      <button className="qty-btn" onClick={() => dec(l.id, l.qty)}>-</button>
                      <span>{l.qty}</span>
                      <button className="qty-btn" onClick={() => inc(l.id, l.qty)}>+</button>
                    </div>
                  </td>
                  <td className="price">₹ {(l.price * l.qty).toFixed(2)}</td>
                  <td><button className="qty-btn delete-btn" onClick={() => dispatch(removeItem(l.id))}>Delete</button></td>
                </tr>
              ))}
              </tbody>
            </table>

            <div className="summary">
              <div className="total">Total: ₹ {subtotal.toFixed(2)}</div>
              <Link to="/plants"><button className="btn" aria-label="Continue shopping">Continue Shopping</button></Link>
              <button className="btn" onClick={() => alert('Coming Soon')}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}