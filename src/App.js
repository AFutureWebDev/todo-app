import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
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

  onClick = () => {
    this.setState({
    isClicked: true,
    todos: this.state.todos.concat(this.state.text),
    text: '',
   })
  }

  onChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  // doneItem = () => {
  //   console.log("button was pressed")
  //   this.setState({
  //     isClicked: true,
  //     todos: this.state.todos.splice(this.state.text)
  //   })
  // }



  render() {
    console.log("***THIS IS STATE***", this.state.isOn)
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {this.state.todos.map(function(value){
          return (
            <p>{value} <button onClick={this.state.todos.splice(this.state.text)}>Done</button></p>
          );
        })}

        <input value={this.state.text} onChange={this.onChange}/>
        <button onClick={this.onClick}>Submit</button>
      </header>
    </div>
    );
  }
}


export default App;

// <FirstComponent/>
