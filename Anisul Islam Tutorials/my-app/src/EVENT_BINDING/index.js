import React, { Component } from "react";

class EVENT_BINDING extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render () {

        const {count} = this.state

        return (
            <div>
              <h1>{count}</h1>
              <button onClick={this.handleClick}>increase</button>
            </div>
        )
    }
}

export default EVENT_BINDING;