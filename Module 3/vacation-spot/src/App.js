//Use .map() and props to create multiple vacation <Card />s or <Spot />s. Spend some time to design them well

import React from "react"
import Card from "./Card"
import spotData from "./spotData"


function App() {
    const cardComponents = spotData.map(item => <Card card={item}/>)

    return (
        <div>
            {cardComponents}
        </div>
    )
}

export default App
