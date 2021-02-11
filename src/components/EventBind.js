import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


/*

This file can serve as an example on how to utilize event handlers. ie: onClick, onChange, etc.
1.bind keywork - every state update means new render of component. Could impact large scale apps. 
2.arrow function - Could impact large scale apps also.
3.BEST CASE - bind event handler in constructor. 

*/


class EventBind extends Component{

    constructor(props){
        super(props)
        this.clickHandler = this.clickHandler.bind(this)
        this.state={
            message: 'Hello'
        }

    }
    clickHandler(){
        this.setState({
            message: 'Goodbye'
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message} </div>
                { /* 1.<button className="btn btn-primary" onClick={this.clickHandler.bind(this)}> Click Me</button> */}
                {/* 2. <button className="btn btn-primary" onClick={() => this.clickHandler()}> Click Me</button> */}
                <button className="btn btn-primary" onClick={this.clickHandler}> Click Me</button>


            </div>
        )
    }
}
export default EventBind

 
