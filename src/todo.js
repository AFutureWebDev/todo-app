import React from 'react';

function Todo(props){
    return(
        <div>
            <button onClick = {()=>props.deleteTodo(props.index)}>Done</button>
        </div>
    )
}

export default Todo;