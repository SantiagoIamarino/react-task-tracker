import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <Link to={ `/task/${task.id}` } style={{ textDecoration: 'none', color: 'black' }} >
      <div className={`task ${ (task.reminder) ? 'reminder' : '' }`}
          onDoubleClick={ () => onToggle( task.id ) } 
      >
          <h3>
              { task.text } 
              <FaTimes 
                  onClick={ () => { onDelete(task.id) } } 
                  style={{ color: 'red' }} 
              />
          </h3>
          <p>{ task.day }</p>
      </div>
    </Link>
  )
}

export default Task