import React from 'react'
import { updateTodo } from './api'
import { Todo } from './constant'

interface TodoItemsProps extends Todo{
  onUpdate:(todo:Todo)=>void;
}

export const TodosItem = (Props:TodoItemsProps) => {
  const handleClick=async()=>{
    let updatedTodos=await updateTodo({...Props,status:!Props.status})
    Props.onUpdate(updatedTodos)
  }
  return (
    <div onClick={handleClick}>{Props.title}-{Props.status?'True':'False'}</div>
  )
}
