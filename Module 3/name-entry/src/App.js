import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            submitName: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            if(this.state.name !== ""){
                return {
                    submitName: [
                        ...prevState.submitName,
                        this.state.name
                    ],
                    name: ""
                }
            }else {
                return {
                    submitName: [
                        ...prevState.submitName
                    ]
                }
            }
        })
    }

    render() {
        // const results = this.submitName.map(
        //     result => <li> {result} </li>
        // )
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
                    {/* {result}  */}
                </ul>
            </form>
        )
    }
}

export default App