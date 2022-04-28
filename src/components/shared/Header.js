import React, { useState } from 'react'
import Proptypes from 'prop-types'
import Button from './Button'
import AddTask from '../AddTask'

const Header = ({ title, addTask }) => {

  const [ showTaskForm, setShowTaskForm ] = useState(false)

  const toggleForm = () => {
    setShowTaskForm(!showTaskForm);
  }

  return (
    <div>

        <header className='header'>
            <h1>{ title }</h1>
            <Button 
              text={ (showTaskForm ? 'Close' : 'Add') }
              color={ (showTaskForm ? 'red' : 'black') } 
              onClick={ toggleForm }>
            </Button>
        </header>

        <p style={{ margin: 0, marginTop: '-20px' }}>
          Double click to mark as Reminder
        </p>

        { showTaskForm && <AddTask onAdd={ addTask }/> }

    </div>
  )
}

Header.defaultProps = {
    title: 'Task manager'
}

Header.propTypes = {
    title: Proptypes.string.isRequired
}

export default Header