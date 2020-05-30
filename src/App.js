import React from 'react';
import './App.css';
// import Sample from './Sample';
// import Hooks from './Hooks';
import data from './database/data.json';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Resume from './Resume';
import profileIcon from './user.svg';



let App = () => {
  console.log(data.profiles);
  return(
    <div className="container" style={{border: "1px solid #ddd"}}>
      <header className="bg-info text-white p-2">Resume Application</header> <br />
      <BrowserRouter>              
        <Route exact path="/resume" component={Resume}></Route>
        <Route exact path="/" component={Profile}></Route>
      </BrowserRouter>
      
      
    </div>
  )
}

let Profile = () => {
  let info=data.profiles;
  return (
      <div>
      <div className="row justify-content-center">
      {info.map((i,index)=> (
        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
          <div className="card" style={{boxShadow:"0px 8px 8px -8px #000"}}>
            <div className="card-body text-center">
              <img src={profileIcon} alt="Profile Pic" style={{width:"70%"}}/><br />
              <h3>{i.bio.name}</h3>
              <h5 className="text-secondary">{i.bio.role} </h5> <hr /> <br />
              <a href={"mailto:"+i.bio.email}> {i.bio.email} </a> <br />
              <a href={"tel:"+i.bio.mobile}> {i.bio.mobile} </a> <br />
              <Link className="btn btn-info btn-block" to={{pathname:'/resume', data:{id:index} }}> View Profile </Link>
            </div>
          </div>
        </div>
      ))}        
    </div>
      </div>
  )
}

export default App;





/* function App() {
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
      <Hooks></Hooks>
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

export default App; */