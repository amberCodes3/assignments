import React from "react"
import blogData from './BlogData'
import BlogPost from "./BlogPost"

function BlogList(){
    const blogComponent = blogData.map(item => <BlogPost key ={item.title} blogPost={item} />)
    
    return(
         blogComponent   
    )
}

export default BlogList 