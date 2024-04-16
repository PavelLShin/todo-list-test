import React, { FC } from 'react'
import { ITodoObject } from '../types/types'
import styles from './Todo.module.css'
import { FaRegCircle } from 'react-icons/fa'
import { FaRegCheckCircle } from 'react-icons/fa'

interface TodoProps {
  todo: ITodoObject
  key?: string
  deleteTodo: (text: string) => ITodoObject[] | void
  toggleTodo: (text: string) => ITodoObject[] | void
}

const Todo: FC<TodoProps> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div className={styles.container} onDoubleClick={() => deleteTodo(todo.id)}>
      <div className={styles.content}>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.isCompleted ? (
            <FaRegCheckCircle className={styles.btn_img} />
          ) : (
            <FaRegCircle className={styles.btn_img} />
          )}
        </button>
        <li className={todo.isCompleted ? styles.done_txt : styles.active_txt}>
          <h2>{todo.text}</h2>
        </li>
      </div>
    </div>
  )
}

export default Todo
