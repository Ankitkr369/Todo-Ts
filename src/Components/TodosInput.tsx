import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { addTodo } from './api'
import { Todo } from './constant'
type TodoInputProps={
  onAdd:(todo:Todo)=>void;
}

export const TodosInput = (Props:TodoInputProps) => {
 
  const {onAdd}=Props;
  const[value,setValue]=useState<string>('')

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    let data =await addTodo(false,value)
 onAdd(data)
 setValue('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange}/>
        <button type='submit'>ADD</button>
      </form>
    </div>
  )
}
