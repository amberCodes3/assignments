import React, {useState} from 'react'
const {Provider, Consumer} = React.createContext

function ThemeContextProvider() {
    const [things, setThings] = useState([])

    const addThing = (thing) => {
        setThings(prev => [...prev, thing])
    }
    return(
        <Provider value={things, addThing}>
            {props.children}
        </Provider>
    )
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}