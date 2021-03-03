import React from "react"

class Small extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            if(prevState.colors === "white"){
                return{colors: "black"}
            }else {
                return {colors: "white"}
            }
        })
    }
    
    render() {
        return(
            <div>
                <button onclick={this.handleClick}> Small Time DJ </button>
            </div>
        )
    }
}

export default Small