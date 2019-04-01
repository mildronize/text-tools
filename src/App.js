import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    input: "",
    output: "",
    convertState: "Upper Case"
  }

  convert(input, text){
    console.log(input.toUpperCase());
    switch(text) {
      case "Upper Case":
        return input.toUpperCase()
      default:
        return new Error();
    }
    
  }

  handleButton(text){
    this.setState({convertState: text})
  }

  handleInput(event){
    this.setState({ input: event.target.value });

    this.setState( (prevState) => ({
      output: this.convert(prevState.input, prevState.convertState)
    }));

  }

  render() {
    return (
      <div className="container">
        <h1>Text Tools</h1>
        <div className="text-muted">Case conversion tools for naming</div>
        <div className="mb-4"></div>

        <div className="form-group">
          <label htmlFor="InputText">Input</label>
          <input 
            autoFocus
            type="text" 
            className="form-control" 
            id="InputText" 
            placeholder="Input" 
            value={this.state.input}
            onChange={(e)=> this.handleInput(e)}
            />
        </div>
        <hr/>
        <button
          className="btn btn-dark mr-2"
          onClick={()=> this.handleButton("Upper Case")}
          >
          Upper Case
        </button>
        <button
          className="btn btn-dark mr-2" disabled
          onClick={()=> this.handleButton("Lower Case")}
          >
          Lower Case
        </button>
        <hr/>
        <div className="form-group">
          <label htmlFor="OutputText">Output</label>
          <input 
            type="text" 
            className="form-control" 
            id="OutputText" 
            placeholder="Output"
            value={this.state.output} />
        </div>

      </div>
    );
  }
}

export default App;
