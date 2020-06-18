import React from "react"


function BlogPost(props){
     return (
        <div>
            <h1>{props.blogPost.title}</h1>
            <p>{props.blogPost.subtitle}</p>
           <p>Posted by {props.blogPost.author} on {props.blogPost.date}</p>
      </div>
     )
}

export default BlogPost 