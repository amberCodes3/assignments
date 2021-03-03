//Use .map() and props to create multiple vacation <Card />s or <Spot />s.
/*Extra Credit
Change the background color of your card depending on the timeToGo property.
Give each card 1, 2, or 3 dollar signs ($) depending on if it's less than $500, less than $1000, or more than $1000*/


import React from "react"

function Card(props){
    return (
       <div>
            <h2> {props.card.place}</h2>
            <p style={{ backgroundColor: !props.card.place.winter && "grey"}}>
                ${props.card.price} - {props.card.timeToGo}
            </p>
       </div>
    )
}

export default Card