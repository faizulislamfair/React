import React, { useEffect, useState } from 'react';

function UseEffectExample() {

  const [count, setCount] = useState(0);

  useEffect(()=> {
       console.log("useEffect");  
  }, [count]);


  return (
  <div>
      {console.log("rendering")}
        <h1>Count: {count} </h1>
        <button onClick={() => {setCount(count => count + 1)}}>+</button>
  </div>
  )
}

export default UseEffectExample;
