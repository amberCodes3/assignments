import React from 'react'
import {ThemeContextConsumer} from './themeContext'

function Button(props) {
    return(
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme}></button>
            )}
        </ThemeContextConsumer>
    )
}

export default Button