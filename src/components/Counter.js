import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Counter extends Component{

    constructor(props) {
        super(props)

        this.state = {
             count: 0
        }
    }
    
    increment(){
        this.setState({
            count: this.state.count +1
        },
        () => {console.log('Callback Value', this.state.count)})
        // this.setState((prevState) => ({
        //     count: prevState.count + 1
        // }),() => {console.log('Callback Value', this.state.count)})
        
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return (
            <div>
                <h1 > My Counter! - {this.state.count} </h1>
                <button className ="btn btn-success" onClick = {() => this.increment()}> Click Me to increment</button>
                
            </div>
        )
    
    }
}

export default Counter