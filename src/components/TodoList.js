import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faWindowClose } from '@fortawesome/free-regular-svg-icons'

const TodoList = ({ todoData = [{title: 'Task Title', todo: 'Something to do Something to do Something to do ', status: 'Pending'}] }) => {

  return (
    <div className="container">
      {
        todoData.map(task => (
          <div className="row justify-content-center">
            <div className='col-6'>
              <div className="card">
                <div className="card-body">
                  <div className="card-title alert-dark">{task.title}</div>
                  <div className="d-flex justify-content-between">
                    <a href="#"><FontAwesomeIcon icon={faEdit}/></a>
                    <div>{task.todo}</div>
                    <a href="#"><FontAwesomeIcon icon={faWindowClose}/></a>
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
