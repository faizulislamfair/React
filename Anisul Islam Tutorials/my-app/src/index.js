import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = "Coca Cola";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth()+1;
const currentYear = date.getFullYear();

ReactDOM.render(
  <div>
  <h1>Hello welcome to react</h1>
  <h2>{todoTitle}</h2>
  <h3>kola</h3>
  <h1>{dateName + "/" + monthName + "/" + currentYear}</h1>
  </div>,
  document.getElementById('root')
);

