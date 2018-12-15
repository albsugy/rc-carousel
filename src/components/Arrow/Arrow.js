import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({handleOnClick, disabled, text}) => {
  return (
    <button className="nav-btn" 
    onClick={() => handleOnClick()}  disabled={disabled}
    >{text}</button>
  )
}

Arrow.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Arrow;