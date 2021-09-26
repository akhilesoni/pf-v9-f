import React, { useEffect, useState } from "react";
import { URL } from "../config";
import dummy from '../images/profile_ic.jpg'
import '../style/message.css'
function Message(props){
    return (
        <div className='message'>
            <div className='m-wr'>
                <img src={dummy} alt="me" className='profile-icon' />
                <div className='info-box'>
                    <p style={{fontWeight:'600'}}>{props.message.sender}</p>
                    <p style={{color:'gray'}}>{props.message.created.slice(0,10)}-{props.message.created.slice(12,16)}</p>
                </div>
            </div>
            <p className='message-content'>
                {props.message.content}
            </p>
        </div>
    )
}

export default function Messages(){

    const [messages,setMessages] = useState([])


    useEffect(()=>{
        getMessages()
    })

    const getMessages = ()=>{
        const url = URL + 'messages'
        fetch(url).then(res=>res.json()).then(data=>(
            setMessages(data)
        ))
    }

    return (
        <div className='ad-c-m main'>
            <p className='h'>Messages</p>
            <div className='blog-p'>
                {messages.map(message=>(
                    <Message message={message}/>
                ))}
            </div>
        </div>
    )
}