import React, { useState } from 'react'

const resetForm = (setTitle, setContent) => {
  setTitle('')
  setContent('')
}

const addTask = ({ todoData, setTodoData, title, content, status, setTitle, setContent }) => {
  const newTaske = {
    title,
    content,
    status,
  }
  newTaske.id = Date.now()

  setTodoData([...todoData, newTaske])
  resetForm(setTitle, setContent)
}

const TodoPanel = ({todoData, setTodoData, status}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')


  return (
    <div className="d-flex flex-column col-6 m-auto">
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">Task Title</label>
        <input id="taskTitle" value={title} onChange={event => setTitle(event.target.value)} type="text" className="form-control" placeholder="Title" />
      </div>
      <div className="mb-3">
        <label htmlFor="taskContent" className="form-label">Task Content</label>
        <textarea id="taskContent" value={content} onChange={event => setContent(event.target.value)} className="form-control" placeholder="Task" rows="3" />
      </div>
      <button onClick={() => addTask({todoData, setTodoData, title, content, status, setTitle, setContent})} className="btn btn-secondary mb-4">Add/Save</button>
    </div>
  )
}

export default TodoPanel
