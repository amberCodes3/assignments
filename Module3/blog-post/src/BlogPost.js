import React from "react"


function BlogPost(props){
     return (
        <div>
          <h1 style={{fontFamily: "Georgia", marginRight:"400px", marginLeft:"300px",fontSize:"35px" }}>{props.blogPost.title}</h1>
          <p style={{fontFamily: "Georgia", fontSize:"29px",marginRight:"400px", marginLeft:"300px" }}>{props.blogPost.subTitle}</p>
          <p style={{fontFamily: "Georgia",fontStyle:"italic", marginRight:"400px", marginLeft:"300px", color:"darkgrey"}}>Posted by {props.blogPost.author} on {props.blogPost.date}</p>
      </div>
     )
}

export default BlogPost 