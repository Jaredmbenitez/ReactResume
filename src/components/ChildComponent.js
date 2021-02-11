import React from 'react'

//Here we catch the greet parent method from the parent component


function ChildComponent(props) {
    return (
        <div>
            <h1> Click this button to greet parent</h1>
            <button className="btn btn-warning" onClick={props.greetHandler}> Greet Parent</button>
        </div>
    )
}

export default ChildComponent
