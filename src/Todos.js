import React, { Component } from 'react';
import TodoList from './TodoList.js';
import AddBar from './AddBar.js';

class Todos extends Component {
    render() {
    const {currentText, setText, addTodo, todos} = this.props;   
        return (
            <div>
            <AddBar 
                currentText = {currentText} 
                addTodo = {addTodo} 
                setText = {setText} 
            />

            <TodoList todos = {todos}/>   
            </div>
        );
    }
}

export default Todos;