import React from 'react'
import TodoList from './TodoList'
import TodoPanel from './TodoPanel'

const TodoContainer = ({ todoData = [{title: 'Task Title', todo: 'Something to do', status: 'Pending'}] }) => {

  return (
    <div className="container">
      <TodoPanel />
      <TodoList />
    </div>
  )
}

export default TodoContainer
