import React from 'react'

const Todo = ({ todo, index, learned }) => {

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-8 py-1">
            <input 
            className="form-control" 
            style={{ textDecoration: todo.isLearned ? 'line-through' : 'none' }} 
            value={todo.text} 
            disabled 
            />
          </div>
          <div className="col-lg-2 py-1">
            <button className="btn btn-dark w-100" onClick={() => learned(index)}>Learned</button>
          </div>
          <div className="col-lg-2 py-1">
            <button className="btn btn-danger w-100">Depreciated</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo