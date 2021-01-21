import React from "react"
import {Link, Switch, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import "./styles.css"
import Lyrics from './Lyrics'


function App() {
    return(
        <div className="page">
            <h1 className="title">
                Lyrics Haven
            </h1>
            <br/>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Switch>
                <Route exact path= "/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/lyrics">
                    <Lyrics />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}
 
export default App