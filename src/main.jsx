import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductPage from './Product-page'

import product from './mock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductPage product={product} />
  </React.StrictMode>,
)
