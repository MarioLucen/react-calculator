
import React, { Component } from 'react'

class Screen extends Component {
    render() {
        console.log(this)
        return (
            <div className="row">
                <div className="screen">{this.props.result}</div>
            </div>
        )
    }
}

export default Screen