import React from 'react'
import Task from './shared/Task'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className='tasks'>
        { 
            ( tasks.length > 0 ) ?
                tasks.map(( task ) => (
                    <Task key={ task.id } task={ task } onDelete={onDelete} />
                )) 
            :
                <h2 style={{ textAlign: 'center', marginTop: '40px', opacity: '.7' }}>
                    No tasks to show
                </h2>
        }
    </div>
  )
}

export default Tasks