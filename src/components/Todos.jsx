import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl shadow-2xl border border-zinc-700/50 animate-fade-in">
      <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Your Todos</h2>
      {todos.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <p className="text-zinc-400 text-lg">No todos yet. Add one to get started!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo, index) => (
            <li
              className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 group hover:bg-zinc-700/30 rounded-xl transition-all duration-300 border border-transparent hover:border-zinc-600/50 animate-slide-in backdrop-blur-sm"
              key={todo.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {editId === todo.id ? (
                <div className="flex-1 flex gap-2 items-center">
                  <input
                    className="bg-zinc-900 text-white border border-indigo-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all w-full placeholder:text-zinc-500"
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    autoFocus
                    placeholder="Edit your todo..."
                  />
                  <button
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg hover:shadow-green-500/25 transition-all duration-200 font-medium"
                    onClick={() => {
                      if (editText.trim()) {
                        dispatch(updateTodo({ id: todo.id, text: editText }))
                        setEditId(null)
                      }
                    }}
                  >
                    ✓
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg shadow-lg transition-all duration-200 font-medium"
                    onClick={() => setEditId(null)}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-white text-lg font-medium flex-1 break-words leading-relaxed">{todo.text}</span>
                  <button
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-200 opacity-0 group-hover:opacity-100 font-medium"
                    onClick={() => {
                      setEditId(todo.id)
                      setEditText(todo.text)
                    }}
                  >
                    ✏️
                  </button>
                </div>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 hover:bg-red-600 border-0 py-2 px-4 focus:outline-none rounded-lg shadow-lg hover:shadow-red-500/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105"
                title="Delete"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Todos