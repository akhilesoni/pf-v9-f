import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "../config";
import '../style/blogs.css'
function Archive(){

    const [links,setLinks] = useState([])

    const url = URL + 'archive'
    useEffect(()=>{
        getLinks()
    })


    const getLinks = ()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setLinks(data)
        })
    }

    return(
        <div className='main'>
            <p className='h'>Archive</p>
            <p style={{margin:'10px 0',color:'gray',fontSize:'14px'}}>
            Every year this site changes. I call it my “annual portfolio refresh” <br /> and use it as an opportunity to try new things and continue learning.
            </p>

            {links.map(link=>(
                <div style={{margin:'20px 0'}}>
                    <p style={{fontWeight:'600',fontSize:'17px'}}>{link.title}</p>
                    <Link style={{color:'gray',fontSize:'14px'}} to={link.url}>go to website</Link>
                </div>
            ))}
        </div>
    )
}

export default Archive;