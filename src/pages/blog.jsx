import React, { useEffect, useState } from "react";
import { URL } from "../config";
import profile from '../images/b&wme.jpeg'
export default function Blog(props){
    const id = props.match.params.id
    const url = URL + 'blog/' + id
    const [blog,setBlog] = useState({})

    const [isLiked, setLiked] = useState(false)

    useEffect(()=>{
        getBlog()
    })

    const getBlog = ()=>{
        fetch(url).then(res=>res.json()).then(data=>setBlog(data))
    }

    const like = ()=>{
        setLiked(true)
        
    }
    return (
        <div className='main'>
            <p class='b-h'>{blog.title}</p>
            <div className='b-wr'>
                <img src={profile} alt="me" className='profile-icon' />
                <div className='info-box'>
                    <p style={{fontWeight:'600'}}>Akhlesh Soni</p>
                    <p style={{color:'gray'}}>{blog.date} · {blog.read_time}</p>
                </div>
            </div>
            <p className='b-c'>
                {blog.content}
            </p>
        </div>
    )
}