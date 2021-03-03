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



import React from 'react';
import './App.css';
import Square from './Square'
import Button from './Button'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ["red","yellow","purple","green", "orange","blue", "pink", "aqua", "silver"]
    }
  }
  render() {
const squareComponents = this.state.colors.map(color => <Square color={color}/>)
    return (
      <div className="App">
        {squareComponents}
        <Button colors={this.state.colors} />
      </div>
    )
  }
}
export default App;