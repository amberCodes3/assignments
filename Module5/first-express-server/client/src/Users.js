import React from 'react'

function Users(props) {
    const { name, age} = props
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    )
}


export default Users