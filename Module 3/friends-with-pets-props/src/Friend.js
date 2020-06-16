//In your .map(), render a <Friend /> component, passing through the name, age, and pets of each friend as props.<Friend /> Should display the info nicely. Use some styles and appropriate HTML(JSX) tags. <Friend /> Should also .map() through the pets array and render <Pet />. 

import React from "react"
import Pets from "./Pet"

function Friend(props) {
    const newPet = props.friend.pets.map(item => <Pets  pets ={item} />)

        return(
            <div>
                <h2>Name: {props.friend.name}</h2>
                <p>Age: {props.friend.age}</p>
                <p>Pet: {newPet}</p>
            </div>
        )
}

export default Friend