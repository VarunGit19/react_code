import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
            <li 
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded text-white"
            key={todo.id} >
                {todo.text}
                <button 
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))}
    </>
  )
}

export default Todos