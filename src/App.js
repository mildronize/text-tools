import React from 'react';
import './App.css';
import ConversionActions from './components/ConversionActions';
// Style
import 'bootstrap/dist/css/bootstrap.css';
// Redux
import { convert, setOutput } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

function makeTitle(conversionType){
  return  _.capitalize((_.lowerCase(conversionType)));
}

class App extends React.Component {

  state = {
    input: "",
    output: "",
    title: makeTitle(this.props.conversionType)
  }

  handleInput(event) {
    const input = event.target.value;
    this.setState({ input });
    const output = convert(this.props.conversionType, input);
    this.props.setOutput(output);
    this.setState({ 
      title: makeTitle(this.props.conversionType)
     });
  }

  render() {
    const { output } = this.props;
    return (
      <div className="container">
        <h1>Text Tools: {this.state.title}</h1>
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
            onChange={(e) => this.handleInput(e)}
          />
        </div>
        <hr />

        <ConversionActions input={this.state.input} />

        <hr />
        <div className="form-group">
          <label htmlFor="OutputText">Output</label>
          <input
            type="text"
            className="form-control"
            id="OutputText"
            placeholder="Output"
            value={output} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  conversionType: state.conversionType,
  output: state.output
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ convert, setOutput }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
