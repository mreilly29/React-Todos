import React, {Component} from 'react';

class AddBar extends Component{
    render(){
        const {currentText, setText, addTodo} = this.props;
        return(
        <div>
            <input 
                type='text' 
                value={currentText} 
                onChange={setText}>
            </input>
            <button onClick={addTodo}>ADD</button>
        </div>
        );
    }
}


export default AddBar;