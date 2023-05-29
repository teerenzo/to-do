"use client"

type TodoItemProps={
    id:string,
    title:string,
    complete:boolean,
    toggleTodo:(id:string,complete:boolean)=>void,
    deleteToDo:(id:string)=>void
}

export default function TodoItem({id,title,complete,toggleTodo,deleteToDo}:TodoItemProps){
return <li className="flex gap-1 items-center">
    <div className="flex ">
    <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={(e)=>toggleTodo(id,e.target.checked)} />
    <label htmlFor={id} className='peer-checked:line-through'>{title}</label>
    </div>
    <button onClick={()=>deleteToDo(id)} className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Delete</button>

</li>
}