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

export default Tasklist;