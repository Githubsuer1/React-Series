import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ShopingCart from './ShopingCart'
import { CartProvider } from './Context/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ShopingCart />
  </React.StrictMode>,
)
