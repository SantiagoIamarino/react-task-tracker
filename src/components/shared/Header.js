import React from 'react'
import Proptypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const toggleForm = () => {
    console.log('click')
  }

  return (
    <div>

        <header className='header'>
            <h1>{ title }</h1>
            <Button text='Add' color='black' onClick={ toggleForm }>
            </Button>
        </header>

        <p style={{ margin: 0, marginTop: '-20px' }}>
          Double click to mark as Reminder
        </p>

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