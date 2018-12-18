import React, {Component} from 'react';

class TodoList extends Component{
    render(){
        const {todos} = this.props; 
        const todosList = todos.map((t) => <li key={t}>{t}</li>)
        return(
            <ul>
            {todosList}
          </ul>
        );
    }
}

export default TodoList;