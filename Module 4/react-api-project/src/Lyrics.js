import React from 'react'

function Lyrics(props) {
   return(
       <div className="lyrics">
            <h3>
                {props.lyrics}
            </h3>
            <br/>
            <button
            onClick={props.handleToggler}>Go Back</button>
        </div>
   ) 
}

export default Lyrics