import React, { useState } from "react";
import {Link} from 'react-router-dom';
import '../style/nav.css';
function Nav(props){
    const [isDrop,setDrop] = useState(false)


    const toggleDrop = ()=>{
        setDrop(!isDrop)
    }

    return(
        <div>
            <div onClick={toggleDrop} className={isDrop?'cov-v':'c'}></div>
            <div onClick={toggleDrop} className='nav'>
                <p className='logo'>{props.heading}</p>
                <div className='m-o' onClick={toggleDrop}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className={isDrop?'links ls-d':'links ls-b'}>
                    {props.links.map(link=>(
                        <Link style={{color:'black',textDecoration:'none'}} to={link.url}>
                            <li>{link.title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Nav;