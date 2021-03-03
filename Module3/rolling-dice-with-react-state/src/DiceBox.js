import React from "react"

class DiceBox extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
    }

    render() {
        const rand= Math.floor(Math.random() * 6
        handleClick() {
            this.setState ({this.state.random + this.rand})
        }
        return (
            <div>
                <button onClick={handleClick}>Click Here</button>
            </div>
        )
    }
}

export default DiceBox 