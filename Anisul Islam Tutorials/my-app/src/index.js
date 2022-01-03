import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todoTitle = "Coca Cola";
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, facilis totam eligendi, eius amet voluptatibus adipisci iusto eos illo eaque fugiat repellat sapiente, molestias inventore dolor perferendis reiciendis ipsa consequuntur!";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear();

const headingStyle = {  
  backgroundColor: "purple",
  color: "#fff", 
  textAlign : "center",
  fontSize : "5rem" 
}

ReactDOM.render(
  <div>
  <h1 style={headingStyle}>React to the Rescue</h1>

    <div>
      <h1 className='ext'>Fair Fair Fair</h1>
      <h1 className='similar'>Exams Ongoing</h1>
      <h2>{todoTitle}</h2>
      <h3>kola</h3>
      <h1>{dateName + "/" + monthName + "/" + currentYear}</h1>
    </div>

  <div className='flexing'>
    <div className='card'>
       <h3 className='cardTitle'>{todoTitle}</h3>
       <p className='cardDesc'>{todoDesc}</p>
       <p className='cardFooter'>{dateName + "/" + monthName + "/" + currentYear}</p>
    </div>
  </div>
    
  
  </div>,
  document.getElementById('root')
);

