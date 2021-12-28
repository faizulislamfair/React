import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement('h1', {className: 'heading'}, 'Hello, world!');
//const index = 0;

// component returns an element

// function Clock({locale}) {
//   return (
//     <h1 className="heading">
//        <span className="text">Banana Monkey {new Date().toLocaleTimeString(locale)}</span>
//     </h1>
//   );
// }

// class Clock extends React.Component {
//   render() {
//     return (
//         <h1 className="heading">
//           <span className="text">
//               Hello {new Date().toLocaleTimeString(this.props.locale)}
//           </span>
//         </h1>
//     );
//   }

// }

// const ClockComponent = new Clock();

// class extend kore nile object r define korte hoyna, tokhon <Clock /> ei syntax e lekha jaay
// class extend korle render use korte hobe, props payte hoyle aladavabe vetore handaye dite hobe 

// ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById('root'));

// ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById('root'));

// We can re-use React Component 
// Components receive properties from outside


class Clock extends React.Component {
  
  render() {
    return (
        <h1 className="heading">
          <span className="text">
              Panda {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
          </span>
        </h1>
    );
  }

}

ReactDOM.render(<Clock locale="bn-BD"> buddies </Clock>, document.getElementById('root'));

// Never change props inside components