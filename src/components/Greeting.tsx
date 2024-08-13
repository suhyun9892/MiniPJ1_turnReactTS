import { useState } from 'react'

export default function NameForm() {
  const [name, setName] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)

  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowGreeting(true)
    }
  }

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={onkeydown}
        placeholder="What is your name ?"
        style={{ display: showGreeting ? 'none' : 'block' }}
      />
      <div style={{ display: showGreeting ? 'block' : 'none' }}>
        hello {name} !
      </div>
    </div>
  )
}
