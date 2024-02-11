import { useState } from "react";
import AddModal from '../AddModal';
import SearchBox from '../SearchBox';
import Tasklist from './Tasklist';

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

export default TaskBoard;