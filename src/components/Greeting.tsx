import { useState, useEffect } from 'react'

export default function Greeting() {
  const [name, setName] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)

  // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 name을 불러옴
  useEffect(() => {
    const savedName = localStorage.getItem('name')
    if (savedName) {
      setName(savedName)
      setShowGreeting(true) // 로컬 스토리지에 값이 있으면 바로 인사말을 보여줌
    }
  }, [])

  // name이 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('name', name), [name]
  })

  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShowGreeting(true)
    }
  }

  return (
    <div>
      {/* showGreeting이 false일 때만 input 요소를 렌더링 */}
      {!showGreeting && (
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={onkeydown}
          placeholder="What is your name?"
        />
      )}

      {/* showGreeting이 true일 때만 div 요소를 렌더링 */}
      {showGreeting && <div>hello {name} !</div>}
    </div>
  )
}
