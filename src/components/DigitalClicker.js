import React from 'react'

export default class DigitalClicker extends React.Component{
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let currentTimes = this.state.timesClicked
    this.setState({
      timesClicked: currentTimes + 1
    })
  }
  render(){
    return(
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }





}
