import React from 'react'

const resetForm = (setTitle, setContent) => {
  setTitle('')
  setContent('')
}

const addTask = ({ todoData, setTodoData, title, content, status, setTitle, setContent }) => {
  const newTaske = {
    title,
    content,
    status,
    id: Date.now()
  }

  setTodoData([...todoData, newTaske])
  resetForm(setTitle, setContent)
}

const editTask = ({ todoData, setTodoData, title, content, setTitle, setContent, selectedId, setIsEditMode }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === selectedId)

  selectedTask.title = title
  selectedTask.content = content
  setTodoData(todoDataCp)
  setIsEditMode(false)
  setTitle('')
  setContent('')
}

const TodoPanel = ({ todoData, setTodoData, status, title, setTitle, content, setContent, isEditMode, setIsEditMode, selectedId }) => {

  return (
    <div className="d-flex flex-column col-6 m-auto">
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">Task Title</label>
        <input
          id="taskTitle"
          value={title}
          onChange={event => setTitle(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taskContent" className="form-label">Task Content</label>
        <textarea
          id="taskContent"
          value={content}
          onChange={event => setContent(event.target.value)}
          className="form-control" placeholder="Task" rows="3"
        />
      </div>
      {
        isEditMode ?
          <button
            onClick={() => editTask({todoData, setTodoData, title, content, setTitle, setContent, selectedId, setIsEditMode })}
            className="btn btn-secondary mb-4"
          >
            Save
          </button> :
          <button
            onClick={() => addTask({todoData, setTodoData, title, content, status, setTitle, setContent})}
            className="btn btn-secondary mb-4"
          >
            Add
          </button>
      }
    </div>
  )
}

export default TodoPanel
