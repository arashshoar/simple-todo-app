import React, { useState, useReducer } from 'react'
import TodoList from './TodoList'
import TodoPanel from './TodoPanel'
import { ACTIONS } from './constants'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_TITLE:
      return { ...state, title: action.title }
    case ACTIONS.SET_CONTENT:
      return { ...state, content: action.content }
    case ACTIONS.SET_SELECTED_ID:
      return { ...state, selectedId: action.selectedId }
    case ACTIONS.SET_IS_EDIT_MODE:
      return { ...state, isEditMode: action.isEditMode }
    case ACTIONS.SET_TODO_DATA:
      return { ...state, todoData: action.todoData }
    default:
      return { ...state }
  }
}

const TodoContainer = () => {
  const defaultTodo = { todoData: [] }
  // const [todoData, setTodoData] = useState(defaultTodo)
  // const [title, setTitle] = useState('')
  // const [content, setContent] = useState('')
  // const [isEditMode, setIsEditMode] = useState(false)
  // const [selectedId, setSelectedId] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultTodo);

  return (
    <div className="container">
      <TodoPanel state={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  )
}

export default TodoContainer
