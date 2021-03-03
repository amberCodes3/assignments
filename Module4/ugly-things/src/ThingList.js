import React, {useContext} from 'react'
import {ThemeContextConsumer} from './themeContext'
import Thing from './Thing'

function ThingList() {
    const {things} = useContext(ThemeContextConsumer)
    const listOfThings = things.map(thing => <Thing {...thing}/>)

    return (
        <div>
            {listOfThings} 
        </div>
    )
}

export default ThingList