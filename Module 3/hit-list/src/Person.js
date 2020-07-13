import React from "react"

function Person(props) {
    return (
        <div>
            {props.name}
            <img 
                style= {{
                    height:400, 
                    width:400, 
                    padding:20,
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr 1fr",
                    gridTemplateRows:"1fr 1fr"}}
                src= {props.image}/>
        </div>
    )
}

export default Person