import React from "react";
import Card from "./components/Card";
import Data from './data.json';

function App(){

   
   // <Card titleText={Data[x].title} descText={Data[x].desc}/>


    return   <div>
    <h1 className='headingStyle'>React to the Rescue</h1>
      
      <br />
      <br />

      { Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc}/>) } 
      
      <a href=""></a>
    
    </div>
}

export default App;