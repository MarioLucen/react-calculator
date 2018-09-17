
import React from 'react'

const RoundButton = (props) => <div className={`roundbutton ${props.type || ''}`}>{props.action}</div>

export default RoundButton
