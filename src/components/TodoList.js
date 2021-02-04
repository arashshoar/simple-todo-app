import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose, faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

const changeStatus = ({ id, todoData, setTodoData }) => {
  const todoDataCp = [...todoData]
  const selectedTask = todoDataCp.find(task => task.id === id)
  selectedTask.status = !selectedTask.status
  setTodoData(todoDataCp)
}

const TodoList = ({ todoData, setTodoData }) => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="alert-dark col-8 mb-2">Tasks List</div>
      </div>

      {
        todoData.map(({ id, title, status, content }) => (
          <div key={id} className="row justify-content-center">
            <div className='col-8'>
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between alert-dark">
                    <div>{title}</div>
                    <div className="d-flex" style={{cursor: 'pointer'}}>
                      <div>
                        <FontAwesomeIcon icon={faEdit}/>
                      </div>
                      <div>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon icon={faWindowClose}/>
                      </div>
                      <div>
                        <span>&nbsp;&nbsp;</span>
                        <FontAwesomeIcon
                          onClick={() => changeStatus({id, todoData, setTodoData})}
                          icon={status ? faCheckSquare :faSquare}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>{content}</div>
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
