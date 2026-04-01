import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import String from './string'
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// light + Dark mode toggle </App>
// fetch users from API and display in cards </App>
// show current date and time in top right corner </App>
// counter 0 to 10 with start, pause, stop buttons </Counter>
// fetch top news from newsapi and display in cards </News>
// password show hide toggle </PassToggle>
// string uppercase lowercase toggle + count letters </string>
