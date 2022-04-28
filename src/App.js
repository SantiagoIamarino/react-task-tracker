import React, { useState } from 'react'
import Header from './components/shared/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [ tasks, setTasks ] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: false
    }
  ])
  
  const onDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks( newTasks );
  }

  const onToggle = (id) => {
    setTasks( tasks.map((task) => 
      (task.id === id) ? 
        { ...task, reminder: !task.reminder } 
      : 
        task
    ))
  }

  const addTask = ( e, task ) => {

    e.preventDefault();
    
    const id = (tasks[tasks.length - 1].id) + 1;
    const newTask = { ...task, id }

    setTasks([ ...tasks, newTask ]);

  }

  return (
    <div className='container'>
        <Header 
          title='Task Manager' 
          addTask={ addTask }
        />

        <Tasks 
          tasks={ tasks } 
          onDelete={ onDelete }
          onToggle={ onToggle }
        />
    </div>
  )
}

export default App