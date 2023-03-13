import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// check serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js') // async
      .then((reg) => console.log('serviceWorker is registered'))
      .catch((err) => console.error(err))
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
