import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetail = () => {

  const { id } = useParams();
    
  return (
    <div>TaskDetail</div>
  )
}

export default TaskDetail