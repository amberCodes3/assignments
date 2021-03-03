import React from 'react'
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return(
        <div>
            <nav>
                <Link to= "/">Home</Link>
                <Link to= "/about">About</Link>
                <Link to= "/services">Services</Link>
            </nav>
            <main>
                <Switch>
                    <Route exact path= "/">
                        <Home />
                    </Route>
                    <Route path= "/about">
                        <About />
                    </Route>
                </Switch>
                <Switch>
                    <Route path= "/services">
                        <Services />
                    </Route>
                </Switch>
            </main>
            <footer>
                <Link to= "/">Home</Link>
                <Link to= "/about">About</Link>
                <Link to= "/services">Services</Link>
            </footer>
        </div>
    )
}

export default App 