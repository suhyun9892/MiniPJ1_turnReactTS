import { useState, useEffect } from 'react'
import styles from './Greeting.module.css'

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

  function sayHi() {
    const date = new Date()
    const hours = date.getHours()
    if (hours >= 6 && hours < 12) {
      return 'Good morning'
    } else if (hours >= 12 && hours < 18) {
      return 'Good afternoon'
    } else if (hours >= 18 && hours < 22) {
      return 'Good evening'
    } else {
      return 'Sleep tight'
    }
  }

  return (
    <div className={styles.input_section}>
      {/* showGreeting이 false일 때만 input 요소를 렌더링 */}
      {!showGreeting && (
        <input
          className={styles.input}
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={onkeydown}
          placeholder="What's your name ?"
        />
      )}

      {/* showGreeting이 true일 때만 div 요소를 렌더링 */}
      {showGreeting && (
        <div className="greeting">
          {sayHi()} {name} !
        </div>
      )}
    </div>
  )
}
