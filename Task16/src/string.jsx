import { useState } from 'react'

function StringTask() {
  const [text, setText] = useState('')

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>String Converter</h2>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
        style={{ width: '300px', padding: '8px', marginBottom: '10px' }}
      />

      <p><strong>Uppercase:</strong> {text.toUpperCase()}</p>
      <p><strong>Lowercase:</strong> {text.toLowerCase()}</p>
      <p><strong>Character Count:</strong> {text.length}</p>
    </div>
  )
}

export default StringTask
