import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Create Your Todo
          </h1>
        </header>

        <AddTodo />
        <Todos />

        <footer className="text-center mt-16 text-zinc-500 text-sm">
          A Todo App Built with React + Redux Toolkit + Tailwind CSS
        </footer>
      </div>
    </div>
  )
}

export default App
