import React, { useState, useEffect } from 'react';

let Hooks = () => {
    let [count, setCount] = useState(0);

    return (
        <div style={{textAlign:"center"}}>
            <h3>Hooks component</h3>
            <h4>{count}</h4>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count-1)}>Decrement</button>
        </div>
    );
}

export default Hooks;