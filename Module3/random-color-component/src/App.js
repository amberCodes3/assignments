import React from 'react'
import Color from './Color'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            randomColor: [],
        }
    }

    componentDidMount() {
        fetch("http://www.colr.org/json/colors/random/7")
        .then(response => response.json())
            .then(data => { 
                this.setState({ 
                    randomColor: data
                 })
            })
        }

    render() {
        const text = this.state.randomColor.map((item) => <Color key={item.id} color={item} />)

        return (
            <div>
                {text}
            </div>
        )
    }
}
    

export default App