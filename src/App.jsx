import { useState } from 'react';
import frame from './assets/frame.png';
import logo from './assets/lws-logo-en.svg';

function Footer() {
  return (
    <>
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
            Copyright ©2024 | All rights reserved by Learn with Sumit
          </p>
        </div>
      </footer>
    </>
  )
}

function SearchBox({ onSearch }) {
  let [text, setText] = useState('');

  return (
    <>
      <div className="p-2 flex justify-end">
        <form>
          <div className="flex">
            <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
              <input type="search" id="search-dropdown"
                className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                placeholder="Search Task" value={text} onChange={(e) => { setText(e.target.value); }} required />
              <button type="submit"
                className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4" onClick={(e) => { e.preventDefault(); onSearch(text); }}>
                <svg className="h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

function Tasklist({ Tasks, onEdit, onDelete, onFavorite }) {
  console.log(Tasks);
  if (Tasks.length === 0) {
    return (
      <h1 className=' text-5xl font-bold bg-red-600 p-4 '>There is no item left bro! Want to Add Some Task ?</h1>
    )
  }

  return (
    <>
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
          </tr>
        </thead>
        <tbody>
          {Tasks.map(task => (
            < tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2" key={task.id} >
              <td><button onClick={() => onFavorite(task)}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star"
                width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke={task.isFavorite ? "yellow" : "white"}
                fill={task.isFavorite ? "yellow" : ""} strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
              </button></td>
              <td>{task.title}</td>
              <td>
                <div>
                  {task.description}
                </div>
              </td>
              {/* {console.log(task.tags)} */}
              <td >
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag, index) => (
                    <li key={index}>
                      <span
                        className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 ${task.colors[Math.floor(Math.random() * 8)]}  text-sm capitalize text-[#F4F5F6]`}>{tag}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button className="text-red-500" onClick={() => { onDelete(task) }} >{task.options[0]}</button>
                  <button className="text-blue-500" onClick={() => {
                    onEdit(task);
                  }}>{task.options[1]}</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody >
      </table >
    </>
  )
}

function AddModal({ onSave, isEdit, editableTask, onClose }) {
  const [task, setTask] = useState(editableTask || {
    "id": crypto.randomUUID(),
    "title": "",
    "description": "",
    "isFavorite": false,
    "tags": [],
    "priority": "",
    'colors': ["bg-[#00D991A1]", "bg-[#FE1A1AB5]", "bg-[#BD560BB2]", "bg-[#2F43F8BF]", "bg-[#10FBEDB2]", "bg-[#AE6D0BDB]", "bg-[#F72798]", "bg-[#12372A]"],
    "options": ["Delete", "Edit"]
  });

  // console.log("🚀 ~ AddModal ~ editableTask:", editableTask);
  console.log("🚀 ~ AddModal ~ task:", task)

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    if (name === 'tags') {
      value = value.split(",");
      let newVal = value.filter((item) => {
        if (item.trim() !== '')
          return item;
      });
      console.log("🚀 ~ newVal ~ newVal:", newVal);
      // value = newVal;
      console.log("🚀 ~ handleChange ~ val:", value);
    }

    setTask({
      ...task,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(task);
    if (task.title !== '' && task.description !== '' && task.tags.length > 0 && task.priority !== '')
      onSave(task, isEdit);
  }

  // console.log("🚀 ~ AddModal ~ task:", task)

  return (
    <>
      <div className='bg-black bg-opacity-70 h-full w-full z-5 absolute top-0 left-0 '></div>
      <form
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%]
         bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute  top-1/3 left-1/4 ">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isEdit ? 'Edit Task' : 'Add New Task'}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            {console.log(task.title)}
            <input className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5" type="text" value={task.title} onChange={handleChange} name="title" id="title"
              required />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text" name="description" id="description" value={task.description} onChange={handleChange} required></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5" type="text" value={task.tags} onChange={handleChange} name="tags" id="tags"
                required />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5" name="priority"
                id="priority" value={task.priority} onChange={handleChange} required>
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between lg:mt-20">
          <button type='submit' className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80" onClick={(event) => { event.preventDefault(); onClose(); }} >
            Close
          </button>
          <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80" onClick={(event) => {
            handleSubmit(event);
          }} >
            Save
          </button>
        </div>
      </form>
    </>
  )
}


function TaskBoard() {
  const demoData =
  {
    "id": crypto.randomUUID(),
    "title": "Integration API",
    "description": "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    "isFavorite": true,
    "tags": ["Web",
      "Python",
      "API"],
    "priority": "High",
    "options": ["Delete", "Edit"],
    'colors': ["bg-[#00D991A1]", "bg-[#FE1A1AB5]", "bg-[#BD560BB2]", "bg-[#2F43F8BF]", "bg-[#10FBEDB2]", "bg-[#AE6D0BDB]", "bg-[#F72798]", "bg-[#12372A]"]
  };

  let [Tasks, setTasks] = useState([demoData]);
  const [isEdit, setIsEdit] = useState(false);
  const [editableTask, setEditableTask] = useState(null);

  function handleAddAndEditTask(newTask, isEdit) {
    console.log('adding new task...');
    console.log(newTask);

    if (isEdit) {
      let newTasks = Tasks.map((task) => {
        if (task.id === newTask.id) {
          return newTask;
        } else {
          return task;
        }
      });

      setTasks(newTasks);
      setIsEdit(false);
      setEditableTask(null);
    } else {
      if (Tasks.length === 0) {
        setTasks([
          newTask
        ])
      }
      else {
        setTasks([
          ...Tasks,
          newTask,
        ])
      }
    }
    setShowAddModal(false);
  }

  function handleCloseClick() {
    console.log('Closing ....');
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    console.log('editing a task...');
    setEditableTask(task);
    // console.log(task);
    setIsEdit(true);
    setShowAddModal(true);
  }

  function handleDeleteTask(task) {
    console.log("Deleting a task...");
    const newTasks = Tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
  }

  function handleDeleteAll() {
    console.log('Deleting all....');
    setTasks([]);
  }

  function handleIsFavorite(task) {
    console.log('Toggling favorite icon....');
    let newTasks = Tasks.map(t => {
      if (t.id === task.id) {
        task.isFavorite = !task.isFavorite;
        return task;
      }
      else {
        return t;
      }
    })

    setTasks(newTasks);
  }

  function handleSearchText(text) {
    console.log("got Search Text: ", text);
    text = text.trim().toLowerCase();
    console.log(text);
    let prevTasks = Tasks;

    if (text === '') {
      setTasks(prevTasks);
    } else {
      let filteredTasks = Tasks.filter(t => t.title.toLowerCase() === text.toLowerCase());

      console.log(filteredTasks);
      if (filteredTasks.length !== 0) {
        setTasks(filteredTasks);
      }
    }

    setTimeout(() => {
      console.log('Showing Main List');
      setTasks(prevTasks);
    }, 5000);
  }

  const [showAddModal, setShowAddModal] = useState(false);
  // const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && <AddModal onSave={handleAddAndEditTask} isEdit={isEdit} editableTask={editableTask} onClose={handleCloseClick} />}
        {/* {showUpdateModal && <UpdateModal task={newEditableTask} onEditSave={handleEditSave} />} */}

        <div className="container">
          <SearchBox onSearch={handleSearchText} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <div className="mb-14 items-center justify-between sm:flex">
              <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
              <div className="flex items-center space-x-5">
                <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold" onClick={() => {
                  setShowAddModal(true);
                }}>Add Task</button>
                <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold" onClick={(e) => { handleDeleteAll(); e.preventDefault() }}>Delete All</button>
              </div>
            </div>
            <div className="overflow-auto">
              <Tasklist Tasks={Tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} onFavorite={handleIsFavorite} />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

function Hero() {
  return (
    <>
      <section className="pb-[114px] pt-20 md:mt-[100px]">
        <div className="container lg:px-20">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
              <img className="max-md:w-full" src={frame} width="326" height="290" alt="frame" />
            </div>
            <div>
              <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
                Tasker
              </h1>
              <p className="text-lg my-2 opacity-60">
                Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity
                Ally for
                Seamless Goal Achievement and Stress-Free Task Management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
function Header() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img className="h-[45px]" src={logo} alt="Lws" />
          </a>
        </div>
      </nav>
    </>
  )
}

export default function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </div>
  )
}