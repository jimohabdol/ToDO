import React from "react"
import Todo from "./Todo";

const TodoList = ({todos, remove, complete}) => {
    const todoNode = todos.map(todo => {
      return (<Todo todo={todo} key={todo.id} remove={remove} complete={complete}/>)   
     })
       return (
        <div id="list">
                <p id="info"> Your Todos: </p>
          {todoNode}
        </div>
       )    
}

export default TodoList