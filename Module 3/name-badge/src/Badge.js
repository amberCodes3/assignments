import React from 'react'


function Badge(props) {
console.log(props)

    return (
        <div>
           <div>
                <h1>Badge:</h1>
           </div>
           <div>
                <p>Name:{props.firstName} {props.lastName}</p>
                <p>Phone Number:{props.phone}</p>
                <p>Place of Birth:{props.birth}</p>
                <p>Favorite Food:{props.food}</p>
                <p>E-mail:{props.email}</p>
                <p> {props.about} </p>
            </div>
        </div>
    )
}

export default Badge 