import TodoItem from '@/components/TodoItem'
import { prisma } from '@/db'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const todos = await prisma.todo.findMany()
  // await prisma.todo.create({data:{
  //   title:'testing',
  //   complete:false
  // }})
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
    <ul className='pl-4'>
      {todos.map((todo)=>(

         <TodoItem key={todo.id} {...todo}/>

      ))}

    </ul>
    </>
  )
}
