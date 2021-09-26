import React, { useState } from "react";
import { URL } from "../config";
import '../style/contact.css'
export default function Contact(){
    const [name,setName] = useState('')
    const [message, setMessage] = useState('')
    const [notice,setNotice] = useState('');
    const [isDis,setDis] = useState(false)
    const nameOnChange = (e) => {
        setName(e.target.value)
    }
    const messageOnChange = (e) => {
        setMessage(e.target.value)
    }

    const displayNotice = (notice) =>{
        
        setNotice(notice)
        setDis(true)
        setTimeout(()=>{
            setDis(false)
        },3000)
    }
    const sendMessage = (e) =>{
        e.preventDefault()
        const url = URL + 'messages'
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                sender:name,
                content:message,
                know:'yes'
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).then(data=>{
            if(data.isSent){
                displayNotice('Message Sent Successfully!')
                setMessage('')
                setName('')
            }else{
                displayNotice('Message did not send!')
            }
        })
    }

    return (
        <div className='contact-form'>
            <p className={isDis?'n-d n-p':'n-b n-p'}>{notice}</p>
            <form onSubmit={sendMessage}>
            <label>
                Name
            </label>
            <input maxLength='100' type="text" name='name' className='c-in' value={name} onChange={nameOnChange} placeholder='Your lovely name..'/>

            <label>
                Message
            </label>
            <input maxLength='200' id='msg' type="text" name='message' className='c-in' value={message} onChange={messageOnChange} placeholder='Your lovely message..'/>
            <input onClick={sendMessage} type="submit" value="Send" className='c-sub'/>
            </form>
        </div>
    )
}