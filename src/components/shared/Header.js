import React, { useState } from 'react'
import Proptypes from 'prop-types'
import Button from './Button'
import AddTask from '../AddTask'
import { useLocation } from 'react-router-dom'

const Header = ({ title, addTask }) => {

  const [ showTaskForm, setShowTaskForm ] = useState(false)

  const toggleForm = () => {
    setShowTaskForm(!showTaskForm);
  }

  const location = useLocation();

  return (
    <div>

        <header className='header'>
            <div className="header-container">
              <h1>{ title }</h1>

              { 
                (location.pathname == '/') && 
                  <Button 
                    text={ (showTaskForm ? 'Close' : 'Add') }
                    color={ (showTaskForm ? 'red' : 'black') } 
                    onClick={ toggleForm }>
                  </Button>
              }
            </div>
            

            { 
              (location.pathname == '/') && 
                <p style={{ margin: 0, marginTop: '-20px' }}>
                  Double click to mark as Reminder
                </p>
            }

            { 
              (showTaskForm && location.pathname == '/') && 
                <AddTask onAdd={ addTask }/> 
            }
            
        </header>

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