import React, { useEffect, useState } from "react";
import '../style/blogs.css'
import Blog from "../components/blog";
import { URL } from "../config";
function Blogs(){

    const [blogs,setBlogs] = useState([])

    const url_blog = URL + 'blogs'

    useEffect(()=>{
        getBlogs()
    })


    const getBlogs = ()=>{
        fetch(url_blog).then(res=>res.json()).then(data=>{
            setBlogs(data)
        })
    }

    return(
        <div className='main'>
            <p className='h'>My Writings</p>
            <p style={{margin:'10px 0',color:'gray',fontSize:'14px'}}>Infrequent writing on design, development, conferences, <br /> and other things tangentially related.</p>
            {blogs.map(blog=>(
                <Blog key={blog.id} blog={blog}/>
            ))}
        </div>
    )
}

export default Blogs;