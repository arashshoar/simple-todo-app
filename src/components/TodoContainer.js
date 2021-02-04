import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoPanel from './TodoPanel'

const TodoContainer = () => {

  // const defaultTodo = {
  //   title: 'Task Title',
  //   content: "Do Something do something do something do something",
  // }

  const defaultTodo = []
  const [todoData, setTodoData] = useState(defaultTodo)

  return (
    <div className="container">
      <TodoPanel todoData={todoData} setTodoData={setTodoData} />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </div>
  )
}

export default TodoContainer
