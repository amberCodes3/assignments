//Use .map() and props to create multiple vacation <Card />s or <Spot />s. 

import React from "react"
import Card from "./Card"
import spotData from "./spotData"


function App() {
    const cardComponents = spotData.map(item => <Card key= {item.place} card={item}/>)

    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default App
