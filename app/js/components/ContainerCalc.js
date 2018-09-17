
import React, { Component } from 'react'
import Screen from './Screen'
import Button from './Button'
import Row from './Row'
import RoundButton from './RoundButton'

class ContainerCalc extends Component {
    state = {
      result: '0',
      cached: null,
      operator: null
    }

    onNumberButtonClick = (value) => {
      const result = this.state.result === '0' ? value : this.state.result + value
      this.setState({ result })
    }

    onOperatorButtonClick = (value) => {
      switch (value) {
        case '=':
          this.calculate()
          break
        case '+/-':
          this.setState({ result: this.state.result * -1 })
          break
        case 'AC':
          this.setState({
            result: '0',
            cached: null,
            operator: null
          })
          break
        default:
          this.setState({
            result: '0',
            cached: this.state.result,
            operator: value
          })
          break
      }
    }

    calculate = () => {
      const { operator } = this.state
      switch (operator) {
        case '+':
          this.setState({
            result: Number(this.state.cached) + Number(this.state.result),
            cached: null,
            operator: null
          })
          break
        case '-':
          this.setState({
            result: Number(this.state.cached) - Number(this.state.result),
            cached: null,
            operator: null
          })
          break
        case '*':
          this.setState({
            result: Number(this.state.cached) * Number(this.state.result),
            cached: null,
            operator: null
          })
          break
        case '/':
          this.setState({
            result: Number(this.state.cached) / Number(this.state.result),
            cached: null,
            operator: null
          })
          break
        case '%':
          this.setState({
            result: Number(this.state.cached) % Number(this.state.result),
            cached: null,
            operator: null
          })
          break
      }
    }

    render () {
      return (
        <div className='container'>
          <Row>
            <RoundButton />
            <RoundButton />
            <RoundButton />
          </Row>
          <Row>
            <Screen result={this.state.result} />
          </Row>
          <Row>
            <Button value='AC' type='operator' onClick={this.onOperatorButtonClick} />
            <Button value='+/-' type='operator' onClick={this.onOperatorButtonClick} />
            <Button value='%' type='operator' onClick={this.onOperatorButtonClick} />
            <Button value='/' type='operator' onClick={this.onOperatorButtonClick} />
          </Row>
          <Row>
            <Button value='7' type='number' onClick={this.onNumberButtonClick} />
            <Button value='8' type='number' onClick={this.onNumberButtonClick} />
            <Button value='9' type='number' onClick={this.onNumberButtonClick} />
            <Button value='*' type='operator' onClick={this.onOperatorButtonClick} />
          </Row>
          <Row>
            <Button value='4' type='number' onClick={this.onNumberButtonClick} />
            <Button value='5' type='number' onClick={this.onNumberButtonClick} />
            <Button value='6' type='number' onClick={this.onNumberButtonClick} />
            <Button value='-' type='operator' onClick={this.onOperatorButtonClick} />
          </Row>
          <Row>
            <Button value='1' type='number' onClick={this.onNumberButtonClick} />
            <Button value='2' type='number' onClick={this.onNumberButtonClick} />
            <Button value='3' type='number' onClick={this.onNumberButtonClick} />
            <Button value='+' type='operator' onClick={this.onOperatorButtonClick} />
          </Row>
          <Row>
            <Button value='0' type='number' onClick={this.onNumberButtonClick} />
            <Button value='.' type='number' onClick={this.onNumberButtonClick} />
            <Button value='=' type='operator' onClick={this.onOperatorButtonClick} />
          </Row>
        </div>
      )
    }
}

export default ContainerCalc
