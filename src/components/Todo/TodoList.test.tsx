import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TodoList from './TodoList'

describe('TodoList component', () => {
  const todos = [{ text: 'Помыть полы', isCompleted: false, id: '123' }]
  test('TodoList renders', () => {
    render(
      <TodoList todos={todos} deleteTodo={() => {}} toggleTodo={() => {}} />
    )
    expect(screen.queryByText('Todo list is empty')).toBeNull()
  })
  test('TodoList renders without data', () => {
    render(<TodoList todos={[]} deleteTodo={() => {}} toggleTodo={() => {}} />)
    expect(screen.getByText('Todo list is empty')).toBeInTheDocument()
  })
  test('TodoList empty snapsot', () => {
    const todoList = render(
      <TodoList todos={[]} deleteTodo={() => {}} toggleTodo={() => {}} />
    )
    expect(todoList).toMatchSnapshot()
  })
})
