import './App.css'
import AddTasks from './components/AddTasks'
import Tasklist from './components/TaskList'

export default function App() {

  return (
    <>
      <h1 className="bg-yellow-500 text-5xl text-white p-2 mb-5">Kishor Kumar Paroi</h1>
      <AddTasks />
      <Tasklist />
    </>
  )
}

