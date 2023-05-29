
import TodoItem from '@/components/TodoItem'
import { prisma } from '@/db'
import Image from 'next/image'
import Link from 'next/link'

async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      complete: complete,
    },
  })

}

async function deleteTodo (id:string){
  'use server'
  await prisma.todo.delete({
    where:{
      id:id
    }
  })
}

export default async function Home() {
  const todos = await prisma.todo.findMany()
  return (
    <>
    <header className='flex justify-between items-center mb-4'>
     <h1 className='text-2xl'>
      Todos
     </h1>
     <Link href='new' className='border border-slate-300 text-slate-300 px-2 py-1 rounded outlined-none'>
     New
     </Link>
    </header>
    <ul  className='pl-4'>
      {todos.map((todo)=>(

         <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteToDo={deleteTodo} />

      ))}

    </ul>
    </>
  )
}
