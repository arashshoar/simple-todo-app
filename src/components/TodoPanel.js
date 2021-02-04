import React from 'react'

const TodoPanel = () => (
  <div className="d-flex flex-column col-6 m-auto">
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">Task Title</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Task Content</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
    </div>
    <button className="btn btn-secondary mb-4">Add/Save</button>
  </div>
)

export default TodoPanel
