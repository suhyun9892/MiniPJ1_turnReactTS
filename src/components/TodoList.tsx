import React, { useState, useEffect } from 'react'
import styles from '@/components/TodoList.module.css'
import confetti from 'canvas-confetti'

export default function TodoList() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  useEffect(() => {
    const updatedTodo = localStorage.getItem('todos')
    if (updatedTodo) {
      setTodos(JSON.parse(updatedTodo))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo(event.target.value)
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (todo === '') {
      // console.log('Todo is empty')
      return
    }

    setTodo('')
    setTodos(currentArray => [todo, ...currentArray])
  }

  function deleteTodo(index: number) {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  function allDone() {
    setTodos([])
    localStorage.removeItem('todos')
    confetti({
      particleCount: 150,
      spread: 60
    })
  }

  return (
    <>
      <div className={styles.todoBox}>
        <div className={styles.todoList}>
          <h2 className={styles.title}>Plans for today ({todos.length})</h2>
          <div className={styles.inputSection}>
            <form onSubmit={onSubmit}>
              <input
                value={todo}
                type="text"
                aria-label="Todo input"
                onChange={onChange}
                placeholder="Write your Todos"
                className={styles.todoInput}
              />
            </form>

            <button
              aria-label="allDone button"
              onClick={allDone}
              className={styles.doneButton}>
              All done 🎉
            </button>
          </div>
          <ul className={styles.lists}>
            {todos.map((todo, index) => (
              <li
                key={index}
                className={styles.todoli}>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                />
                <span className={styles.todo}>{todo}</span>
                <button aria-label="edit Button"></button>
                <button
                  className={styles.deleteBtn}
                  aria-label="Delete button"
                  onClick={() => deleteTodo(index)}>
                  ✖︎
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
