/* eslint-disable react/prop-types */
import { useState } from "react";

function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (<>
      <input type="text" className="ml-5 p-2 border border-blue-500 rounded-lg" value={task.text} onChange={(e) => {
        onChangeTask({
          ...task,
          text: e.target.value,
        })
      }} />
      <button className="ml-2 px-8 bg-yellow-600/60 rounded-lg" onClick={() => setIsEditing(false)}> Save </button>
    </>)
  } else {
    taskContent = (
      <>
        <span className="ml-5 p-4" key={task.id}>{task.text}</span>
        <button className="ml-2 px-8 bg-gray-500/60 rounded-lg" onClick={() => {
          setIsEditing(true);
        }} > Edit </button>
      </>
    )
  }

  return (
    <>
      <input type="checkbox" checked={task.done} onChange={(e) => {
        onChangeTask({
          ...task,
          done: e.target.checked,
        })
      }} />
      {taskContent}
      <button className="ml-2 px-8 bg-red-500/60 rounded-lg" onClick={() => onDeleteTask(task.id)}> Delete </button>
    </>
  )
}

function Tasklist({ Tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="ml-4">
      {
        Tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <Task task={task} onChangeTask={onChangeTask} onDeleteTask={onDeleteTask} />
          </li>
        ))
      }
    </ul>
  )
}

function AddTasks({ onAddTask }) {
  const [text, setText] = useState('');

  return (
    <div className="mb-2">
      <input type="text" className="ml-5 p-2 border border-blue-500 rounded-lg" value={text} placeholder="Add To-Do Task" onChange={(e) => {
        setText(e.target.value);
      }} />
      <button className="ml-2 px-10 py-1 bg-purple-500/60 rounded-lg" onClick={() => {
        setText('');
        onAddTask(text);
      }} > Add </button>
    </div>
  )
}

export default function App() {
  const [Tasks, setTasks] = useState(initialTasks);
  let nextId = Tasks.reduce((prev, curr) => prev && prev.id > curr.id ? prev.id : curr.id) + 1;

  function handleAddTask(text) {
    if (text.trim() !== '') {
      setTasks(
        [
          ...Tasks,
          {
            id: nextId,
            text: text.trim(),
            done: false,
          }
        ]
      )
    }
  }

  function handleChangeTask(task) {
    setTasks(Tasks.map(t => t.id === task.id ? task : t));
  }

  function handleDeleteTask(taskId) {
    setTasks(Tasks.filter(t => t.id !== taskId));
  }

  return (
    <>
      <h1 className="bg-yellow-500 text-5xl text-white p-2 mb-5">Kishor Kumar Paroi</h1>
      <AddTasks onAddTask={handleAddTask} />
      <Tasklist Tasks={Tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />
      {console.log(Tasks)}
    </>
  )
}




const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];