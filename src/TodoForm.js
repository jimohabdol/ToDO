import React from "react"

const TodoForm = ({addTodo}) => {
    //input tracker
    let input;
    return(
      <div id="form">
        <input ref={node => input=node} placeholder="Add To Do..."/>
        <button 
          onClick={() =>{ 
          addTodo(input.value)
          input.value = ''
          input.placeholder="Add To Do..."}
          }>
          +
        </button>
      </div>
    )  
}

export default TodoForm