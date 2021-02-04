import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose } from '@fortawesome/free-regular-svg-icons'

const TodoList = ({ todoData = [{title: 'Task Title', todo: 'Something to do Something to do Something to do ', status: 'Pending'}] }) => {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="alert-dark col-8 mb-2">Tasks List</div>
      </div>

      {
        todoData.map(task => (
          <div className="row justify-content-center">
            <div className='col-8'>
              <div className="card">
                <div className="card-body">
                  <div className="card-title d-flex justify-content-between alert-dark">
                    <div href="#"><FontAwesomeIcon icon={faEdit}/><span className="badge text-uppercase bg-outline">Edit</span></div>
                    {task.title}
                    <div href="#"><span className="badge text-uppercase bg-outline">Delete</span><FontAwesomeIcon icon={faWindowClose}/></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>{task.todo}</div>
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
