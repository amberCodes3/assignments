import React, {useState, useContext} from 'react'
import {ThemeContextConsumer} from './themeContext'

function Form(props) {
    const {addThing} = useContext(ThemeContextConsumer)
    const [img, setImg] = useState(props.img)
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)

    const handleSubmit = event => {
        event.preventDefault()
        addThing({img, title, description})
    }

    const handleChange = event => {
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value= 
                    onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form