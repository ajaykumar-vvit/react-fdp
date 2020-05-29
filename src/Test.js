import React from 'react';

/* let Test = (params) => {
    return <h4>{params.name}</h4>
}

export default Test; */

export default class Test extends React.Component {
    render() {
        return (
            <div style={{boder: "sold", padding: "1%"}}>
                <h5> {this.props.name}</h5>
            </div>
        )
    }
}