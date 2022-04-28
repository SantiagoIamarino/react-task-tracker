import React from 'react'
import Proptypes from 'prop-types'

const Button = ({ text, color, onClick }) => {
  return (
    <>
        <button onClick={onClick} 
            className='btn' style={{ background: color }}>
            { text }
        </button>
    </>
  )
}

Button.defaultProps = {
    color: 'black'
}

Button.propTypes = {
    text: Proptypes.string.isRequired,
    color: Proptypes.string,
    onClick: Proptypes.func
}

export default Button