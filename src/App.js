import React, { useState } from 'react'
import Header from './components/shared/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    }
  ])
  
  const onDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks( newTasks );
  }

  return (
    <div className='container'>
        <Header title='Task Manager' />
        <Tasks tasks={ tasks } onDelete={ onDelete } />
    </div>
  )
}

export default App