import React, { Component } from 'react';
import '../style.css'
import HomePage from './HomePage'
import LogInPage from './LogInPage'

class CONDITIONAL_RENDERING extends Component {

    constructor(props){
        super(props)

        this.state = {
             isLoggedIn: true
        }
    }


    render() {

        const {isLoggedIn} = this.state
        // let element;

        // if(isLoggedIn){
        //     element = <HomePage />
        // }
        // else{
        //     element = <LogInPage />
        // }

        // element = isLoggedIn ? <HomePage /> : <LogInPage />

        return(

            <div>
                {isLoggedIn ? <HomePage /> : <LogInPage />}
            </div>
            
        )

    }
}

export default CONDITIONAL_RENDERING;