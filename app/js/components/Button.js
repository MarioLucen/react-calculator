
import React from 'react'

const Button = (props) => <div className={`button ${props.type || ''}`}>{props.value}</div>

export default Button 