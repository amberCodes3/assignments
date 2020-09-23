import React, {useContext} from 'react'
import {ThemeContextConsumer} from './themeContext'

function ThingList () {
    const {things} = useContext(ThemeContextConsumer)
    const listOfThings = things.map()

    return (
        <div>
            {listOfThings} 
        </div>
    )
}

export default ThingList