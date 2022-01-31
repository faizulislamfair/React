import React from "react";

import Child from "./components/STATE_LIFTING/Child";


function App() {

  const data = "I am from parent (app)";

  const handleChildData = (childData) => {
   console.log("App: " + childData);
  }

     return(
       <div>
        <Child data={data}  onChildData={handleChildData}/>
       </div>
     )
}


export default App;