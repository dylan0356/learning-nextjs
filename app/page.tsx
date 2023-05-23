import { The_Girl_Next_Door } from "next/font/google";
import Link from "next/link";
import { toEditorSettings } from "typescript";
import { prisma } from "@/db";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany()
}

export default async function Home() {

  const todos = await getTodos()

  return (<>
  <header className='flex justify-between items-center mb-4'>
    <h1 className="text-2x1">Todos</h1>
    <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate700 outline-none" href='/new'>New</Link>
  </header>

  <ul className='pl-4'>
    {todos.map(todo => (
      <TodoItem key={todo.id} {...todo} />
    ))}
  </ul>
  </>)
}