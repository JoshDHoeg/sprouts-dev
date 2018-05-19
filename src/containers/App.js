import React, { Component } from 'react';
// import '../assets/App.css';
// import axios from 'axios';
import PlantList from '../components/PlantList.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {zip: '20001'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    console.log(event.target.zip)
    this.setState({zip: event.target.zip});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.zip);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Sippin Sprouts</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.zip} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <PlantList zip={this.state.zip} />
      </div>
    );
  }
}

export default App;
