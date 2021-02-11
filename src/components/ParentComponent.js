import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
             parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }


    greetParent() {
        alert('Hi' + this.state.parentName)     //Curly brackets are ES6 Notation.  Template literal.
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>   
            </div>
        )   //pass down method to child
    }
}

export default ParentComponent
