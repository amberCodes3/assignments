import React, {Component} from 'react'
import Form from './Form'
import Lyrics from './Lyrics'



class Home extends Component {
    constructor() {
        super()
        this.state= {
            artist: "",
            title: "" 
        }
    }
    
     handleSubmit = event => {
        event.preventDefault()
        this.props.getLyrics(this.state.artist, this.state.title)
      }

      handleChange = event => {
          const {name, value} = event.target
          this.setState(prevState => ({
              ...prevState, 
              [name] : value
          }))
      }

    render() {
        return (
           <div>
               {
                   !this.props.toggle ? 
                   <Form 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}/>
                    :
                    <Lyrics 
                    lyrics={this.props.lyrics}
                    handleToggler={this.props.handleToggler}/>
                }
           </div>
        )
    }
  }

export default Home