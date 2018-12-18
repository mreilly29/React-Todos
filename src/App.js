import React, { Component } from 'react';
import Todos from './Todos'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: ['A','B','C'],
      currentText: ''
    };
  }
  setText = (e) => {
    const newValue = e.target.value;
    this.setState({currentText: newValue});
  }
  addTodo = () =>{
    const newTodo = this.state.currentText;
    const todos = [...this.state.todos, newTodo];
    this.setState({todos, currentText: ''});    
  }
  render() { 
    const {currentText, todos} = this.state;   
    return (
      <div>
          <Todos 
          currentText = {currentText} 
          addTodo = {this.addTodo} 
          setText = {this.setText} 
          todos = {todos} />
      </div>
    );
  }
}

export default App;
