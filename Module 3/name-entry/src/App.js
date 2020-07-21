import React from "react"
import List from "./List"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            names: []
        }
        
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {
                names: [...prevState.names, prevState.name]
            }
        })
    }

    render() {
        const mappedNames = this.state.names.map((items,i) => <List key={i} {...items} />)
        
        return (
            <form>
                <input 
                    name ="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    placeholder="Enter Name"
                />
                <h1>Your Name: {this.state.name}</h1>
                <button onClick={this.handleSubmit}>Add Name</button>
                <ul>
                    {mappedNames}
                </ul>
            </form>
        )
    }
}

export default App