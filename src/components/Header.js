import React from 'react'
import Proptypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div>{title}</div>
  )
}

Header.defaultProps = {
    title: 'Task manager'
}

Header.propTypes = {
    title: Proptypes.string.isRequired
}

export default Header