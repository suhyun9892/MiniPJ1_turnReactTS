import React, { useState, useEffect } from 'react'
import styles from '@/components/TodoList.module.css'

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

  return (
    <>
      <div className={styles.todoBox}>
        <div className={styles.todoList}>
          <h3 className={styles.h3}>My Todos ({todos.length})</h3>
          <form onSubmit={onSubmit}>
            <input
              value={todo}
              type="text"
              onChange={onChange}
              placeholder="Write your Todos"
              className={styles.todoInput}
            />
            <button>Add To do</button>
          </form>
          {/* <hr className={styles.hr} /> */}
          <ul className={styles.lists}>
            {todos.map((todo, index) => (
              <li
                key={index}
                className={styles.todoli}>
                <input type="checkbox" />
                <span className={styles.todo}>{todo}</span>
                <button onClick={() => deleteTodo(index)}>✖︎</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
