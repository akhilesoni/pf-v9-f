import React from "react";
import { Link } from "react-router-dom";
import '../style/home.css'
export default function Blog(props){
    var to = '/blog/'+props.blog.id
    return (
        <div className='blog'>
            <Link style={{color:'var(--black)',textDecoration:'none'}} to={to}>
                <p className='blog-t'>{props.blog.title}</p>
            </Link>
            <div className='wr'>
                <p className='blog-d'>{props.blog.date}</p>
                <p className='blog-d'>{props.blog.read_time}</p>
            </div>
        </div>
    )
}