import React, {Component} from "react"
import axios from 'axios'
const {Provider, Consumer} = React.createContext()


class LyricsContextProvider extends Component {
    constructor() {
        super()
        this.state= {
            lyrics: "",
            toggle: false   
        }
    }

     getLyrics = (artist, title) => {
        axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
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

    handleToggler = () => {
        this.setState(prevState => ({
            toggle: !prevState.toggle
        }))
    }

    render() {
        return (
            <Provider value={{
                lyrics: this.state.lyrics,
                getLyrics: this.getLyrics,
                toggle: this.state.toggle,
                handleToggler: this.handleToggler
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {LyricsContextProvider, Consumer as LyricsContextConsumer}