import React, { useState } from 'react'
import TodoList from './TodoList'
import TodoPanel from './TodoPanel'

const TodoContainer = () => {
  const defaultTodo = []
  const [todoData, setTodoData] = useState(defaultTodo)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)
  const [selectedId, setSelectedId] = useState('')

  return (
    <div className="container">
      <TodoPanel
        todoData={todoData}
        setTodoData={setTodoData}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <TodoList
        todoData={todoData}
        setTodoData={setTodoData}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  )
}

export default TodoContainer
