import React from 'react';
import ReactDOM from 'react-dom';


// const element = React.createElement('h1', {className: 'heading'}, 'Hello, world!');
//const index = 0;

// component returns an element

function Clock({locale}) {
  return (
    <h1 className="heading">
       <span className="text">Banana Monkey {new Date().toLocaleTimeString(locale)}</span>
    </h1>
  );
}
  ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// We can re-use React Component 
// Components receive properties from outside