import React, { Component } from 'react'


class Message extends Component{
    
    constructor(){
        super()
        this.state = {
            message: "Welcome Visitor" , 
        }
    }
    changeMessage(){            // function to change state based on click of button
        this.setState({
            message: "Thank you for subscribing"
        })
    }
    
    
    render(){
            
    return (
        <div>
            <h1> {this.state.message}  </h1>
            <button onClick = {() => this.changeMessage()}> {this.props.name} </button>
        </div>
    )

    }
}
export default Message