import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row items-center gap-4 mt-12 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 p-6 rounded-xl shadow-2xl border border-indigo-700/50 backdrop-blur-sm">
        <input
          type="text"
          className="flex-1 bg-zinc-900/90 rounded-lg border border-indigo-400/50 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/50 focus:ring-offset-2 focus:ring-offset-transparent text-base outline-none text-white py-3 px-4 leading-8 transition-all duration-300 placeholder:text-zinc-400 shadow-lg backdrop-blur-sm hover:bg-zinc-800/90"
          placeholder="What needs to be done? ✨"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={100}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed border-0 py-3 px-8 focus:outline-none rounded-lg text-lg font-semibold shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Add Todo ➕
        </button>
      </form>
    </div>
  )
}

export default AddTodo