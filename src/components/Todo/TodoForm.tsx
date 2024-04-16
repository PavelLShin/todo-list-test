import React, { FC, useState } from 'react'
import styles from './TodoForm.module.css'
import { ITodoObject } from '../types/types'
import { FaChevronDown } from 'react-icons/fa'

interface TodoFormProps {
  addTodo: (text: string) => ITodoObject[] | void
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>('')
  const onSubmitHeandler = (event: React.FormEvent<HTMLFormElement>) => {
    if (text) {
      event.preventDefault()

      addTodo(text)

      setText('')
    }
    event.preventDefault()
  }

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }
  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHeandler}>
        <button type="submit">
          <FaChevronDown className={styles.btn_img} />
        </button>

        <input
          type="text"
          value={text}
          onChange={changeText}
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  )
}

export default TodoForm
