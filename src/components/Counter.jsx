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
      <h1>Counter</h1>
      <h2>{this.state.count}</h2>
      <button onClick={this.handleMinus}>-</button>
      <button onClick={this.handlePlus}>+</button>
    </div> );
  }
}
 
export default Counter;