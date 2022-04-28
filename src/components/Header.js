import React from 'react'
import Proptypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div>

        <header className='header'>
            <h1>{ title }</h1>
            <button className='btn'>Add</button>
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