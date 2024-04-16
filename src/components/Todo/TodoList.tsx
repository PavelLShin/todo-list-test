import React, { FC } from 'react'
import { ITodoObject } from '../types/types'
import Todo from './Todo'
import styles from './TodoList.module.css'

interface TodoListProps {
  todos: ITodoObject[]
  deleteTodo: (text: string) => ITodoObject[] | void
  toggleTodo: (text: string) => ITodoObject[] | void
}

const TodoList: FC<TodoListProps> = ({ deleteTodo, toggleTodo, todos }) => {
  return (
    <div className={styles.container}>
      {!todos.length && (
        <div className={styles.container_empty}>
          <h2>Todo list is empty</h2>
        </div>
      )}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
