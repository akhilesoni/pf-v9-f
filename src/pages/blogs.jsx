import React, { useEffect, useState } from "react";
import '../style/blogs.css'
import Blog from "../components/blog";
import { URL } from "../config";
import Pbar from "../components/pbar";
function Blogs(){

    const [blogs,setBlogs] = useState([])
    const [pbar,setPbar] = useState(true)
    const url_blog = URL + 'blogs'

    useEffect(()=>{
        getBlogs()
        console.log('jj')
        return ()=>{
            setBlogs([])
        }
    },[])


    const getBlogs = ()=>{
        fetch(url_blog).then(res=>res.json()).then(data=>{
            setBlogs(data)
            setPbar(false)
        })
    }

    return(
        <div className='main'>
            <p className='h'>My Writings</p>
            <p style={{margin:'10px 0',color:'gray',fontSize:'14px'}}>Infrequent writing on design, development, conferences, <br /> and other things tangentially related.</p>
            {blogs.map(blog=>(
                <Blog key={blog.id} blog={blog}/>
            ))}
            <div className={pbar?'pbar':'pbar-b'}>
               <Pbar/>
            </div>
        </div>
    )
}

export default Blogs;