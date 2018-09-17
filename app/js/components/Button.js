
import React from 'react'

const Button = (props) => <div className={`button ${props.type || ''}`}
  onClick={() => props.onClick(props.value)}>
  {props.value}
</div>

export default Button
