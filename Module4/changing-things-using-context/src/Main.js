import React from 'react'
import {ThemeContextConsumer} from './themeContext'

import Button from './Button'

function Main(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <main className={`${context.theme}-theme`}> 
                    <h1>Click the Button to Toggle the {`${context.theme}-theme`} theme</h1>
                    <Button />
                </main>
            )}
        </ThemeContextConsumer>
    )
}


export default Main
