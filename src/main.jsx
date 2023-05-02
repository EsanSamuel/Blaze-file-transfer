import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FavoriteProvider } from './Context/Favorites'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FavoriteProvider>
    <App />
    </FavoriteProvider>
  </React.StrictMode>
)
