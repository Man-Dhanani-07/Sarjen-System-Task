import { useState } from 'react'

function PassToggle() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  let inputType = ''
  let buttonLabel = ''

  if (showPassword) {
    inputType = 'text'
    buttonLabel = 'Hide'
  } else {
    inputType = 'password'
    buttonLabel = 'Show'
  }

  const handleToggle = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type={inputType}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ padding: '8px 10px', width: '220px' }}
        />
        <button onClick={handleToggle} style={{ padding: '8px 12px' }}>
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}

export default PassToggle
