import React, {Component} from 'react'
import Form from './Form'
import Lyrics from './Lyrics'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()
        this.state= {
            artist: "",
            title: "",
            lyrics: "",
            toggle: false   
        }
    }
    
     handleSubmit = event => {
        event.preventDefault()
        console.log("submitted")
        axios.get(`https://api.lyrics.ovh/v1/${this.state.artist}/${this.state.title}`)
            .then(res => {
                this.setState(prevState => ({
                    ...prevState,
                    lyrics: res.data.lyrics,
                    toggle: !prevState.toggle 
                }))
                console.log(res.data.lyrics)
            })
            .catch(err => console.log(err))
      }

      handleChange = event => {
          const {name, value} = event.target
          this.setState(prevState => ({
              ...prevState, 
              [name] : value
          }))
      }

      handleToggler = () => {
          this.setState(prevState => ({
              toggle: !prevState.toggle
          }))
      }

    render() {
        return (
           <div>
               {
                   !this.state.toggle ? 
                   <Form 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}/>
                    :
                    <Lyrics 
                    lyrics={this.state.lyrics}
                    handleToggler={this.handleToggler}/>
                }
           </div>
        )
    }
  }

export default Home