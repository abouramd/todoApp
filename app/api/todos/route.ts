import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { auth } from "@/auth"


const prisma = new PrismaClient()

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const todos = await prisma.todo.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const session = await auth();
  console.log(JSON.stringify(session));
  
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { title } = await request.json()
  const todo = await prisma.todo.create({
    data: { title, userId: session.user.id },
  })
  return NextResponse.json(todo)
}

export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id, title, completed } = await request.json()
  const todo = await prisma.todo.update({
    where: { id, userId: session.user.id },
    data: { title, completed },
  })
  return NextResponse.json(todo)
}

export async function DELETE(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await request.json()
  await prisma.todo.delete({
    where: { id, userId: session.user.id },
  })
  return NextResponse.json({ success: true })
}

