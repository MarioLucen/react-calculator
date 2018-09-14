
import React from 'react'

// class Screen extends Component {
//     render() {
//         console.log(this)
//         return (
//             <div className="row">
//                 <div className="screen">{this.props.result}</div>
//             </div>
//         )
//     }
// }

const Screen = (props) => <div className="screen">{props.result}</div>

export default Screen