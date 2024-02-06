/* eslint-disable react/prop-types */
import { useReducer, useState } from 'react';
import './App.css';

function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  return (
    <div className='p-2 ml-4 mt-4'>
      <input type="text" placeholder='Add To-Do Task' value={text}
        className='border border-blue-600 rounded-lg p-3 text-2xl'
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button className='bg-purple-600/45 w-32 ml-2 p-2 rounded-lg' onClick={() => {
        setText('');
        onAddTask(text);
      }}>Add</button>
    </div>
  )
}

function Task({ task, onChangeTask, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.text);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input type="text" className='border border-blue-600 rounded-lg p-3 text-2xl' value={text} onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value);
        }} />
        <button className='bg-red-600/45 w-32 ml-2 p-2 rounded-lg' onClick={() => {
          setIsEditing(false);
          onChangeTask({
            ...task,
            text,
          })
        }}>Save</button>
      </>
    )
  }
  else {
    taskContent = (
      <>
        <span className='p-2'>{task.text}</span>
        <button className='bg-slate-600/45 w-32 ml-2 p-2 rounded-lg' onClick={() => {
          setIsEditing(true);
        }}>Edit</button>
      </>
    )
  }

  return (
    <div className='p-2 ml-4'>
      <input type="checkbox" checked={task.done} onChange={(e) => {
        onChangeTask({
          ...task,
          done: e.target.checked,
        })
      }} />
      {taskContent}
      <button className='bg-red-600/45 w-32 ml-2 p-2 rounded-lg' onClick={() => {
        onDelete(task.id);
      }}>Delete</button>
    </div>
  )
}

function TaskList({ TaskList, onChangeTask, onDelete }) {
  return (
    <ul>
      {TaskList.map((task) => (
        < li key={task.id} >
          <Task task={task} onChangeTask={onChangeTask} onDelete={onDelete} />
        </ li>
      ))}
    </ul>
  )
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        }
      ]
    }
    case 'changed': {
      return tasks.map((t) => t.id === action.task.id ? action.task : t)
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.taskId);
    }
    default: {
      throw Error('Unknown Action : ' + action.type);
    }
  }
}

export default function App() {
  const [Task, dispatch] = useReducer(tasksReducer, initialTasks);
  console.log("🚀 ~ App ~ Task:", Task);

  const goNextId = (data) => {
    let nextId = 0;
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        if (nextId < data[i].id)
          nextId = data[i].id;
      }
    }
    return nextId + 1;
  }

  function handleAddTask(text) {
    // if (text.trim() !== '') {
    //   setTask([
    //     ...Task,
    //     {
    //       id: goNextId(Task),
    //       text: text.trim(),
    //       done: false
    //     }
    //   ])
    // }
    dispatch({
      type: 'added',
      id: goNextId(Task),
      text
    })
  }
  function handleChangeTask(task) {
    // console.log(task);
    // setTask(
    //   Task.map((t => t.id === task.id ? task : t))
    // )
    dispatch({
      type: 'changed',
      task,
    })
  }
  function handleDeleteTask(taskId) {
    // console.log(taskId);
    // let updatedTask = Task.filter(t => t.id !== taskId);
    // setTask(updatedTask);
    // action object
    dispatch({
      type: 'deleted',
      taskId
    })
  }

  return (
    <>
      <h1 className="font-semibold bg-yellow-500 text-5xl">Kishor Kumar Paroi</h1>
      <div>
        <AddTask onAddTask={handleAddTask} />
        <TaskList TaskList={Task} onChangeTask={handleChangeTask} onDelete={handleDeleteTask} />
      </div>
    </>
  )
}

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
