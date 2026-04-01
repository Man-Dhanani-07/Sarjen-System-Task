import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')
  const [users, setUsers] = useState([])
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const isDark = theme === 'dark'

  let buttonText = ''
  if (isDark) {
    buttonText = 'Light Mode'
  } else {
    buttonText = 'Dark Mode'
  }

  const handleThemeChange = () => {
    if (isDark) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div className="top-bar">
          <div>
            <h1>User Cards</h1>
            <p className="clock">
              {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
            </p>
          </div>
          <button onClick={handleThemeChange}>{buttonText}</button>
        </div>

        <div className="cards">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
              <p><strong>City:</strong> {user.address.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
