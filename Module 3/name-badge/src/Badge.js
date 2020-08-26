import React from 'react'


function Badge(props) {
console.log(props)

    return (
        <div style={{border: "3px solid", padding: "30px", margin: "50px 200px 100px 250px", borderRadius:"10px"}}>
           <div>
                <h1 style={{backgroundColor: "grey", color: "white", }}>Badge:</h1>
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