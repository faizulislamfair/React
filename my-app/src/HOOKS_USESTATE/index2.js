import React, { useState } from "react";

function HOOKS_USESTATE2() {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default HOOKS_USESTATE2;