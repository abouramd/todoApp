"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import logOut from "../_actions/logOut"
import UserProfile from "./UserProfile"

interface Todo {
  id: string
  title: string
  completed: boolean
}

export default function TodoApp({ name, avatarUrl }: { name: string, avatarUrl: string }) {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const response = await fetch("/api/todos", {
      credentials: "include",
    });
    const data = await response.json()
    setTodos(data)
  }

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodo.trim()) return
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTodo }),
    })
    const todo = await response.json()
    setTodos([todo, ...todos])
    setNewTodo("")
  }

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id)
    if (!todo) return
    const response = await fetch("/api/todos", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
    })
    const updatedTodo = await response.json()
    setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)))
  }

  const deleteTodo = async (id: string) => {
    await fetch("/api/todos", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <Button variant="outline" onClick={logOut}>Sign Out</Button>
      </div>
      <div className="mb-4">
        <UserProfile
          name={name}
          avatarUrl={avatarUrl} // A sample avatar URL
        />
      </div>
      <form onSubmit={addTodo} className="flex mb-4">
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="flex-grow mr-2"
        />
        <Button type="submit">Add</Button>
      </form>
      <ul>
        {todos instanceof Array && todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between py-2 border-b">
            <div className="flex items-center w-[90%]">
              <Checkbox
                id={todo.id}
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <label htmlFor={todo.id} className={`w-[90%] break-words ${todo.completed ? "line-through text-gray-500" : ""}`}>
                {todo.title}
              </label>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

