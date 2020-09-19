import React, { Component } from 'react';
import Snake from './snake';

  
class App extends Component{
  state = {
    snakeBody : [
      [0,0],[2,0]
    ]
  }
  render(){
    return(
      <Snake snakeBody={this.setState.snakeBody}/>
    )
  }
}

export default App;
