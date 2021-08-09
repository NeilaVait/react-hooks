import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
     }
  }
  

   handlePlus = () => {
     this.setState({ count: this.state.count+1 });
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