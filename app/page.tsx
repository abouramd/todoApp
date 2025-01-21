"use server";
import { auth } from "@/auth";
import TodoApp from "./_components/TodoApp"
import LogIn from "./_components/LogIn";

export default async function Home() {
  const session = await auth();

  if (!session) {
    return (
      <LogIn />
    )
  }

  return (<TodoApp
    name={session?.user?.name || 'NONE'}
    avatarUrl={session?.user?.image || ''} // A sample avatar URL
  />)
}

