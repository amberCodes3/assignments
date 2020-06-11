//Use .map() and props to create multiple vacation <Card />s or <Spot />s. Spend some time to design them well

import React from "react"

function Card(props){
    return (
       <div>
            <h2>{props.card.place}</h2>
            <p>{props.card.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.card.timeToGo}</p>
       </div>
    )
}

export default Card