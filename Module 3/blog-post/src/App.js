import React from 'react'

import Header from "./Header"
import BlogList from "./BlogList"
import Footer from './Footer'


function App(){
   return (
       <div>
            <img src= "https://coursework.vschool.io/content/images/size/w2000/2017/12/home-bg.jpg"
            style={{height:"600px", width:"100%", position:"relative"}}/>
            <Header />
            <BlogList />
            <Footer />
       </div>
   )
}

export default App