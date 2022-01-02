import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todoTitle = "Coca Cola";
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
  <h1 className='ext'>Fair Fair Fair</h1>
  <h1 className='similar'>Exams Ongoing</h1>
  <h2>{todoTitle}</h2>
  <h3>kola</h3>
  <h1>{dateName + "/" + monthName + "/" + currentYear}</h1>
  </div>,
  document.getElementById('root')
);

