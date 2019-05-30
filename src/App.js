import React from 'react';
import logo from './logo.svg';
import './App.css';
// import FirstComponent from './firstComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOn: false
    }
  }

  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }

  render() {
    console.log("***THIS IS STATE***", this.state.isOn)
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <button onClick={this.render.toggle}>Submit</button>
      </header>
    </div>
    );
  }
}


export default App;

// <FirstComponent/>
