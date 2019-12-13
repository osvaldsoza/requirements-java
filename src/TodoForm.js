import React, { useState } from 'react'

function TodoForm({ addTodo }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return
    addTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="py-1">
      <input
        className="form-control"
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="To Do"
      />
    </form>
  )
}

export default TodoForm