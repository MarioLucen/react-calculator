
import React, { Component } from 'react'
import Screen from './Screen'
import Button from './Button'
import Row from './Row'
import RoundButton from './RoundButton'

class ContainerCalc extends Component {
  render () {
    return (
      <div className='container'>
        <Row>
            <RoundButton />
            <RoundButton />
            <RoundButton />
        </Row>
        <Row>
            <Screen result='0' /> 
        </Row>
        <Row>
            <Button value='AC' type='operator' />
            <Button value='+/-' type='operator' />
            <Button value='%' type='operator' />
            <Button value='/' type='operator' />
        </Row>
        <Row>
            <Button value='7' type='number' />
            <Button value='8' type='number' />
            <Button value='9' type='number' />
            <Button value='*' type='operator' />
        </Row>
        <Row>
            <Button value='4' type='number' />
            <Button value='5' type='number' />
            <Button value='6' type='number' />
            <Button value='-' type='operator' />
        </Row>
        <Row>
            <Button value='1' type='number' />
            <Button value='2' type='number' />
            <Button value='3' type='number' />
            <Button value='+' type='operator' />
        </Row>
        <Row>
            <Button value='0' type='number' />
            <Button value='.' type='number' />
            <Button value='=' type='operator' />
        </Row>
      </div>
    )
  }
}

export default ContainerCalc
