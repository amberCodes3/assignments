import React from 'react'

function Form(props) {
    return(
        <div className="box">
            <form onSubmit={props.handleSubmit}>
                <input 
                    onChange={props.handleChange} 
                    type="text"
                    name="artist"
                    placeholder="Artist Name"
                    id="artist"
                    value={props.artist}
                />
                <input 
                    onChange={props.handleChange} 
                    type="text"
                    name="title"
                    placeholder="Song Name"
                    id="song"
                    value={props.title}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form