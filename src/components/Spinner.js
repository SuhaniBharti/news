import React, { Component } from 'react'
import spin from "./Spinner-3.gif";
export class spinner extends Component {
  render() {
    return (
      <div>
     <img src={spin} alt="loading"/>
      </div>
    )
  }
}

export default spinner
