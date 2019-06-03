import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './todo';
// import FirstComponent from './firstComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isClicked: false,
      todos: []
    }
  }

  // Writing in the todo
  userInput = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  // Function that handles what happens when you hit the submit button
  handleSubmit = () => {
    this.setState({
    isClicked: true,
    todos: this.state.todos.concat(this.state.text),
    text: '',
   })
  }

  // Function to take the first item in the array and remove it
  deleteTodo = (index) =>{
    const removeTodo = this.state.todos;
    removeTodo.splice(index, 1);
    this.setState({todos:removeTodo})
  }

  // Visually creates the todo list
  renderList=() => {
    return this.state.todos.map((item) => {
      return <p>{item}</p>
    })
  }
  

  render() {
    console.log("***THIS IS STATE***", this.state.isOn)
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {this.renderList()}
        {this.state.todos.map((todo, index ) =>(
          <Todo
            text={todo.text}
            index={index}
            key={index}
            deleteTodo = {this.deleteTodo}
          />
        ))}
        <input value={this.state.text} onChange={this.userInput}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </header>
    </div>
    );
  }
}


export default App;

