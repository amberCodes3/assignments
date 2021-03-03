import React, {useState, useContext} from 'react'
import {ThemeContextConsumer} from './themeContext'

function Form(props) {

    const {addThing} = useContext(ThemeContextConsumer)
    const [img, setImg] = useState("")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = event => {
        event.preventDefault()
        addThing({img, title, description})
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name = "title"
                    value= {title}
                    placeholder = "Title"
                    onChange= {e => setTitle(e.target.value)} 
                />
                <input
                    type= "text"
                    name= "image"
                    value= {img}
                    placeholder = "Image URL"
                    onChange = {e => setImg(e.target.value)}
                />
                <input
                    type= "text"
                    name= "description"
                    value= {description}
                    placeholder = "Description"
                    onChange = {e => setDescription(e.target.value)}
                />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form