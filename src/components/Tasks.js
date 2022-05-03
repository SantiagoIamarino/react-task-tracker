import React from 'react'
import { useSelector } from 'react-redux'
import Task from './shared/Task'

const Tasks = () => {

  const state = useSelector(state => state)

  return (
    <div className='tasks'>
        { 
            ( state.length > 0 ) ?
                state.map(( task ) => (
                    <Task 
                        key={ task.id } 
                        task={ task } 
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