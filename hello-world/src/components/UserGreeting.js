import React, { Component } from 'react'

class UserGreeting extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 isLoggedIn: true
            }
        }
        

    render() {

        //  Short Circuit Operator

        return this.state.isLoggedIn && <div>Welcome Faizul</div>


        //  Ternary Operator

        // return(
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Faizul</div>
        // ) :  ( 
        //    <div>Welcome Guest</div>
        // )
        // )


        // Elementa Variables

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Faizul</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        // If/Else Statements

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Faizul</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Faizul</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
     }
}

export default UserGreeting
