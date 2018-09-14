
import React, { Component } from 'react'
import Screen from './Screen'
import Button from './Button'
import Row from './Row'

class ContainerCalc extends Component {
  render () {
    return (
      <div className='container'>
        <Row>
            <Screen result='0' /> 
        </Row>
        <Row>
            <Button value='1' type='number' />
            <Button value='1' type='operator' />
            <Button value='1'/>
            <Button value='1'/>
        </Row>
      </div>
    )
  }
}

export default ContainerCalc
