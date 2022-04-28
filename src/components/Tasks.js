import React from 'react'
import AddTask from './AddTask'
import Task from './shared/Task'

const Tasks = ({ tasks, onDelete, onToggle, addTask }) => {
  return (
    <div className='tasks'>

        <AddTask onAdd={ addTask }/>

        { 
            ( tasks.length > 0 ) ?
                tasks.map(( task ) => (
                    <Task 
                        key={ task.id } 
                        task={ task } 
                        onDelete={onDelete} 
                        onToggle={onToggle}
                    />
                )) 
            :
                <div className='no-tasks-container'>
                    <h2 style={{ textAlign: 'center', marginTop: '40px', opacity: '.7' }}>
                        No tasks to show
                    </h2>
                </div>
        }
    </div>
  )
}

export default Tasks