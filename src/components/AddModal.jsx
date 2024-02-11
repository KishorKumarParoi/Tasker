import { useState } from "react";

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

export default AddModal;