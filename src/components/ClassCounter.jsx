import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super();
        this.state ={number:0};
    }
    Increment=() => {this.setState({number: this.state.number + 1});
};
  render() {
    return (
      <>
     
      <h1>Class Counter {this.state.number}</h1>
      <button onClick={this.Increment}>increase</button>
      <button onClick={()=> {
        this.setState({number:this.state.number -1});
      }}>decrease</button>

      </>
    )
  }
}