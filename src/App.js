import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import About from "./About"
import Title from './Title'
import Footer from './Footer'
import axios from 'axios'
import './style.scss';

window.id = 0
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.apiURL = 'https://jsonplaceholder.typicode.com/todos'
    this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this)
  }
  
  addTodo(value) {
    const newTodo = {
      text: value,
      isCompleted: false,
    }
    axios.post('https://5e4bbf9ca641ed0014b022d3.mockapi.io/api/todo', newTodo)
      .then(response => {
        this.state.data.push(newTodo)
        this.setState({data: this.state.data})})
    //updata data
    // this.state.data.push(newTodo)
    //updata state
    //this.setState({data: this.state.data})
    
  }
  
  removeTodo(id) {
    axios.delete(`https://5e4bbf9ca641ed0014b022d3.mockapi.io/api/todo/${id}`)
    const reminder = this.state.data.filter(todo => {
      if(todo.id !== id) {
        return todo
      }
    })
    this.setState({data: reminder})
  }
  
  complete = (id) => {
    console.log(id)
    this.setState(prevState => {
      const updatedTodos = prevState.data.map(todo => {
        if(todo.id===id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted
            }
        }
        return todo
      })
        return {data: updatedTodos};
    })
  }

  componentDidMount() {
    axios('https://5e4bbf9ca641ed0014b022d3.mockapi.io/api/todo')
      .then(response => this.setState({data: response.data}))
  }
  
  render() {
    return(
      <Router>
        <div id="container">
          <Title />
          <Route exact path='/' render={props => (
            <React.Fragment>
             <TodoForm addTodo={this.addTodo} />
             <TodoList 
              todos={this.state.data} 
              remove={this.removeTodo} 
              complete={this.complete}
              />
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App