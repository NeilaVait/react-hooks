import React, { Component } from 'react';

class Counter extends Component {
  state = { 
    count: 0
   }

   handlePlus = () => {
     const stateCopy = {...this.state}
     stateCopy.count +=1
     this.setState(stateCopy);
   }

   handleMinus = () => {
    const stateCopy = {...this.state}
    stateCopy.count -=1
    this.setState(stateCopy);
   }


  render() { 
    return ( <div>
      <span>{this.state.count}</span>
      <button onClick={this.handlePlus}>+</button>
      <button onClick={this.handleMinus}>-</button>
    </div> );
  }
}
 
export default Counter;