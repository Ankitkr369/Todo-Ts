import React, { useEffect, useState } from 'react'
import getTodos from './api'
import { Todo } from './constant'
import { TodosInput } from './TodosInput'
import { TodosItem } from './TodosItem'

export const TodosApp = () => {
 
  const[todos,setTodos]=useState<Todo[]>([])
 
const onAdd=(todo:Todo)=>{
  setTodos([...todos,todo])
}
const onUpdate=(updatedTodo:Todo)=>{
let updatedTodos=todos.map(todo=>{
  if(todo.id===updatedTodo.id){
    return updatedTodo
  }
  return todo;
})
setTodos(updatedTodos)
}
  useEffect(()=>{
getTodos().then(d=>{
  setTodos(d)
})
  },[])

  console.log(todos)
  return (
    <div>
      <h1>Todo App</h1>
      <TodosInput
      onAdd={onAdd}
      />
      {todos?.map(item=>{
        return <TodosItem
        onUpdate={onUpdate}
        key={item.id}{...item}/>
      })}
    </div>
  )
}
