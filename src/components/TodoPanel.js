import React from 'react'
import { ACTIONS } from './constants'

const resetForm = dispatch => {
  dispatch({ type: ACTIONS.SET_TITLE, title: '' })
  dispatch({ type: ACTIONS.SET_CONTENT, content: '' })
}

const addTask = ({ todoData, title, content, dispatch, state }) => {
  const newTaske = {
    title,
    content,
    status: false,
    id: Date.now()
  }

  dispatch({ type: ACTIONS.SET_TODO_DATA, todoData: [...todoData, newTaske] })
  resetForm(dispatch)

}

const editTask = ({ todoData, title, content, selectedId, dispatch }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === selectedId)

  selectedTask.title = title
  selectedTask.content = content
  dispatch({ type: ACTIONS.SET_TODO_DATA, todoData: todoDataCp })
  dispatch({ type: ACTIONS.SET_IS_EDIT_MODE, isEditMode: false })
  dispatch({ type: ACTIONS.SET_TITLE, title: '' })
  dispatch({ type: ACTIONS.SET_CONTENT, content: '' })
}

const TodoPanel = ({ state, dispatch }) => {
  const { title, content, isEditMode, selectedId, todoData } = state

  return (
    <div className="d-flex flex-column col-6 m-auto">
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">Task Title</label>
        <input
          id="taskTitle"
          value={title}
          onChange={event => dispatch({ type: ACTIONS.SET_TITLE, title: event.target.value })}
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
          onChange={event => dispatch({ type: ACTIONS.SET_CONTENT, content: event.target.value })}
          className="form-control" placeholder="Task" rows="3"
        />
      </div>
      {
        isEditMode ?
          <button
            onClick={() => editTask({ todoData, title, content, selectedId, dispatch })}
            className="btn btn-secondary mb-4"
          >
            Save
          </button> :
          <button
            onClick={() => addTask({ todoData, title, content, dispatch, state })}
            className="btn btn-secondary mb-4"
          >
            Add
          </button>
      }
    </div>
  )
}

export default TodoPanel
