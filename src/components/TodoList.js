import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose, faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import { ACTIONS } from './constants'

const changeStatus = ({ id, todoData, dispatch }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === id)
  selectedTask.status = !selectedTask.status
  dispatch({ type: ACTIONS.SET_TODO_DATA, todoData: todoDataCp })
}

const deleteTask = ({ id, todoData, dispatch }) => {
  const todoDataCp = [...todoData]
  const taskIndex = todoDataCp.findIndex(task => task.id === id)
  todoDataCp.splice(taskIndex, 1)
  dispatch({ type: ACTIONS.SET_TODO_DATA, todoData: todoDataCp })
}

const editTask = ({ id, todoData, dispatch }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === id)

  dispatch({ type: ACTIONS.SET_TITLE, title: selectedTask.title })
  dispatch({ type: ACTIONS.SET_CONTENT, content: selectedTask.content })
  dispatch({ type: ACTIONS.SET_SELECTED_ID, selectedId: id })
  dispatch({ type: ACTIONS.SET_IS_EDIT_MODE, isEditMode: true })
}

const TodoList = ({ state, dispatch }) => {

  //todoData, setTodoData, setIsEditMode, setTitle, setContent, setSelectedId
  const { todoData } = state

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="alert-dark col-8 mb-2">Tasks List</div>
      </div>

      {
        todoData.map( task => (
          <div key={task.id} className="row justify-content-center">
            <div className='col-8'>
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between alert-dark">
                    <div>{task.title}</div>
                    <div className="d-flex" style={{ cursor: 'pointer' }}>
                      <div>
                        <FontAwesomeIcon
                          onClick={() => editTask({ id: task.id, todoData, dispatch })}
                          icon={faEdit}
                        />
                      </div>
                      <div>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon
                          onClick={() => deleteTask({ id: task.id, todoData, dispatch })}
                          icon={faWindowClose}
                        />
                      </div>
                      <div>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon
                          onClick={() => changeStatus({ id: task.id, todoData, dispatch })}
                          icon={task.status ? faCheckSquare :faSquare}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>{task.content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TodoList
