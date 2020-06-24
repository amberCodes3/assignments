import React from "react"
import Navbar from "./Navbar"

function Header(){
    return(
        <div>
            <header>
                <Navbar />
                <h1 style={{fontFamily: "Georgia", fontSize:"80px", marginBottom:"5px", position:"absolute", top:"190px", left:"500px", color:"white"}}>Clean Blog</h1>
                <p style={{fontFamily: "Georgia", fontSize:"25px", textAlign:"center", position:"absolute", top:"330px", left:"550px", color:"white"}}>A Blog Theme by Start Bootstrap</p>
            </header>
        </div>
        
    )
}

export default Header 