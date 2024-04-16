import React, { FC } from 'react'
import TodoForm from './components/Todo/TodoForm'
import TodoList from './components/Todo/TodoList'
import styles from './App.module.css'
import { useState } from 'react'
import { ITodoObject } from './components/types/types'
import { v4 as uuidv4 } from 'uuid'

const App: FC = () => {
  const [todos, setTodos] = useState<ITodoObject[]>([])
  const [todosVisible, setTodosVisible] = useState<string>('All')
  console.log(todos)

  const addTodoHeandler = (text: string): ITodoObject[] | void => {
    const newTodo: ITodoObject = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHeandler = (id: string): ITodoObject[] | void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHeandler = (id: string): ITodoObject[] | void => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const deleteCompletedTodosHeandler = (): ITodoObject[] | void => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const activeTodos: ITodoObject[] = todos.filter((el) => !el.isCompleted)

  const completedTodos: ITodoObject[] = todos.filter((el) => el.isCompleted)

  const activeTodosCount: number = todos.filter(
    (todo) => !todo.isCompleted
  ).length

  return (
    <div className={styles.container}>
      <TodoForm addTodo={addTodoHeandler} />
      <TodoList
        deleteTodo={deleteTodoHeandler}
        todos={
          todosVisible === 'All'
            ? todos
            : todosVisible === 'Active'
            ? activeTodos
            : todosVisible === 'Completed'
            ? completedTodos
            : []
        }
        toggleTodo={toggleTodoHeandler}
      />
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <h2>{`${activeTodosCount} items left`}</h2>
          <div className={styles.footer_btn__container}>
            <button
              onClick={() => setTodosVisible('All')}
              className={
                todosVisible === 'All' ? styles.btn_active : styles.btn
              }
            >
              All
            </button>
            <button
              onClick={() => setTodosVisible('Active')}
              className={
                todosVisible === 'Active' ? styles.btn_active : styles.btn
              }
            >
              Active
            </button>
            <button
              onClick={() => setTodosVisible('Completed')}
              className={
                todosVisible === 'Completed' ? styles.btn_active : styles.btn
              }
            >
              Completed
            </button>
          </div>
          <button onClick={deleteCompletedTodosHeandler}>
            Clear completed
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
