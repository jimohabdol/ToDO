import React from "react";

const Todo = ({todo, remove, complete}) => {

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
    <div>
        <p className="todos" style={todo.isCompleted ? completedStyle : null}> 
          {todo.text}
          <span className="removeBtn"
            onClick={()=>{remove(todo.id)}}
          >
            x
          </span>
          <input type="checkbox" key={todo.id}
            onChange={()=>{complete(todo.id)}}
          />
        </p>
    </div>
    )
}

export default Todo