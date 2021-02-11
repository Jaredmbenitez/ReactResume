import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


/*

This file can serve as an example on how to utilize event handlers. ie: onClick, onChange, etc.
1.bind keywork - every state update means new render of component. Could impact large scale apps. - DONT USE
2.arrow function - Could impact large scale apps also. - Easiest, but still probably DONT USE
3.Recommended by React DOCS - bind event handler in constructor. -Recommended BEST CASE SCENARIO!!!
4. make handleFunction (clickHandler) an arrow function. -Recommended / experimental
*/


class EventBind extends Component{

    constructor(props){
        super(props)
        //this.clickHandler = this.clickHandler.bind(this)
        this.state={
            message: 'Hello'
        }

    }
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    // }

    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }
    render(){
        return(
            <div>
                <div>{this.state.message} </div>
                { /* 1.<button className="btn btn-primary" onClick={this.clickHandler.bind(this)}> Click Me</button> */}
                {/* 2. <button className="btn btn-primary" onClick={() => this.clickHandler()}> Click Me</button> */}
                {/* 3. <button className="btn btn-primary" onClick={this.clickHandler}> Click Me</button> */}
                <button className="btn btn-primary" onClick={this.clickHandler}> Click Me</button>


            </div>
        )
    }
}
export default EventBind

 
