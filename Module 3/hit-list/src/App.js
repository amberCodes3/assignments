import React from "react"
import Person from "./Person"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            targets : [ ]
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => { 
                this.setState({ 
                    targets: data,
                    isLoading: false 
                 })
            })
            
}

    render() {
        const text = this.state.targets.map((item, i) => <Person key = {i} {...item}/>)
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default App