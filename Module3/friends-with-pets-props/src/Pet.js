import React from "react"


function Pet(props){
    const mystyle = {
        padding: "10px",
        margin: "20px"
    }

    return (
        <div>
            <h4 style={mystyle}>Name: {props.pets.name}</h4>
            <p style={mystyle}>Breed: {props.pets.breed}</p>
        </div>
    )
}

export default Pet 