import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRemove = function(key) {
    let finaleValue = this.state.finalValues;
    delete finaleValue[key]; 
    this.setState({
      finalValues: finaleValue
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let value = this.Name.value;
    let finalValues = this.state.finalValues || [];
    finalValues.push(value);
    this.setState({
      finalValues: finalValues
    })
    this.Name.value = ""
  };

  render() {
    let finalValues = this.state.finalValues || [];

    return (
      <div className="container">
        <Form inline onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <FormControl inputRef={ref => { this.Name = ref; }}/>
          <Button type="submit" bsSize="small" bsStyle="success">Submit</Button>
        </Form>

        <div className="row col-md-6">
        <table className="table condensed hover" striped="true"><thead><tr><td>Id</td><td>Name</td><td className="pull-right">Remove</td></tr></thead><tbody>
        {
          finalValues.map((val,key) => <tr><td>{key+1}</td><td>{val}</td><td className="pull-right"><Button bsStyle="danger" onClick={this.handleRemove.bind(null,key)}>X</Button></td></tr>)
        }
        </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
