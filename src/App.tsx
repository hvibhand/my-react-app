import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  )
}