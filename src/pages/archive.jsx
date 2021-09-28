import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pbar from "../components/pbar";
import { URL } from "../config";
import '../style/blogs.css'
function Archive(){

    const [links,setLinks] = useState([])
    const [pbar,setPbar] = useState(true)
    const url = URL + 'archive'
    useEffect(()=>{
        getLinks()
    })


    const getLinks = ()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setLinks(data)
            setPbar(false)
        })
    }

    return(
        <div className='main'>
            <div className={pbar?'pbar':'pbar-b'}>
                <Pbar/>
            </div>
            <p className='h'>Archive</p>
            <p style={{margin:'10px 0',color:'gray',fontSize:'14px'}}>
            Every year this site changes. I call it my “annual portfolio refresh” <br /> and use it as an opportunity to try new things and continue learning.
            </p>

            {links.map(link=>(
                <div style={{margin:'20px 0',backgroundColor:'var(--lg',borderRadius:'7px',padding:'10px 20px',border:'1px solid var(--border'}}>
                    <p style={{fontWeight:'600',fontSize:'17px',marginBottom:'20px'}}>{link.title}</p>
                    <a style={{color:'gray',fontSize:'14px'}} href={link.url}>go to website</a>
                </div>
            ))}
        </div>
    )
}

export default Archive;