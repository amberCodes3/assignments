import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"
import {LyricsContextProvider} from "./lyricsContext"

ReactDOM.render(
    <Router>
        <LyricsContextProvider>
            <App />
        </LyricsContextProvider>
    </Router>,
    document.getElementById("root")
)