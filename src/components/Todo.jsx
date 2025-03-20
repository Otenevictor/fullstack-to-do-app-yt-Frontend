import React from 'react'
import { FaTrash, FaEdit } from "react-icons/fa";


function ToDo({text, updateMode, deleteTodo}) {
  return (
    <>
    <div className='todo'>
    <div className='text'>{text}</div>
    <div className='icons'>
        <FaEdit className='icon ' onClick={updateMode} />
        <FaTrash className='icon' onClick={deleteTodo} />

    </div>

    </div>
    </>
  )
}

export default ToDo