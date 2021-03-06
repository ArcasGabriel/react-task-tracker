import PropTypes from 'prop-types'
import React from 'react'

function Button({color, onClick, text}) {




    return (
   <button 
   onClick={onClick}
   style={{backgroundColor: color}}
   className='btn'>{text}</button>
   
        )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
