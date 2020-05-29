import React from 'react';
import  Test from './Test';

class Sample extends React.Component {
    
    c/* onstructor() {
        super();
        this.state = {
            count: 0,
            isActive: true
        }
    }
    increment = () => {
        this.setState({count: this.state.count+1});
    }
    decrement = () => {
        this.setState({count: this.state.count-1});
    }
    show = () => {
        this.setState({isActive: true });
    }
    hide = () => {
        this.setState({isActive: false });
    }
    render() {
        let names = ['Steve', 'Mark', 'Maverick'];
        return (
            <div style={{textAlign:"center",border:"solid"}}>
                <h4> From another Sample component - From another file</h4>
                <h5>{this.state.count}</h5>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                {this.state.isActive ? names.map((i) => <Test name={i}></Test>) : null}
                <button onClick={this.show}>Show</button>
                <button onClick={this.hide}>Hide</button>
            </div>
        );
    } */

    render() {
        //return <Test name="Ajay"></Test>
        let fruits = ['Apple', 'Bannana', 'Citrus'];
        return (
            <div>
                {fruits.map((i,index) => 
                    <Test name={i} key={index}></Test>
                )}
            </div>
        )
    }
}

export default Sample;