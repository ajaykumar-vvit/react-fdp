import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sample from './Sample';

function App() {
  let names = ['Steve', 'Mark', 'Maverick'];
  return (    
    <div>
      <Home></Home>
      <h4> From defult App function Component</h4>
      <ul>
        { names.map((n) => (
          <li> {n} </li>
        ))}
      </ul>
      <Sample></Sample>
    </div>
  );
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Ajay Kumar'
    };
  }
  render() {
    return (
      <div>
        <h3> From Home class component </h3>
        <h4> Name from state: {this.state.name}</h4>
      </div>
    );      
  }
}

export default App;
