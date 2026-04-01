import { useEffect, useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          setIsRunning(false)
          return 10
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning])

  const startCounter = () => {
    setCount(0)
    setIsRunning(true)
  }

  const pauseCounter = () => {
    setIsRunning(false)
  }

  const stopCounter = () => {
    setIsRunning(false)
    setCount(0)
  }

  return (
    <div className="counter-page">
      <div className="counter-box">
        <h1>Counter 0 to 10</h1>
        <p className="counter-value">{count}</p>

        <div className="counter-buttons">
          <button onClick={startCounter}>Start</button>
          <button onClick={pauseCounter}>Pause</button>
          <button onClick={stopCounter}>Stop</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
