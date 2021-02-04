import React from 'react'
import TodoList from './TodoList'

const TodoContainer = ({ todoData = [{title: 'Task Title', todo: 'Something to do', status: 'Pending'}] }) => {

  return (
    <div className="container">
      {
        <div className="row">
          <div></div>
        </div>
      }
      <TodoList />
    </div>
  )
}

export default TodoContainer
