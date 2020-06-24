import React from 'react'
import './style.css'
import Parent from './Parent'
import Small from "./Small"


class App extends React.Component {
    render() {
        return(
            <div>
                <Small />
                <Parent />
            </div>
        )
    }
}

export default App