import React, { useState } from "react";
import { URL } from "../config";
import '../style/admin.css'
export default function AddBlog(){

    const [blog,setBlog] = useState({
        title:'',
        date:'',
        content:'',
        readTime:''
    })

    const [notice,setNotice] = useState('');

    const [isDis,setDis] = useState(false)

    const onchange = (e)=>{
        e.preventDefault()

        let title = blog.title
        let content = blog.content
        let date = blog.date
        let readTime = blog.readTime
        let name = e.target.name;
        let value = e.target.value;


        switch(name){
            case 'title':
                title = value
                break
            case 'date':
                date = value
                break
            case 'content':
                content = value
                break
            case 'readTime':
                readTime = value
        }

        setBlog({
            title:title,
            date:date,
            content:content,
            readTime:readTime
        })
        
    }

    const displayNotice = (notice) =>{
        setDis(true)
        setNotice(notice)
        setTimeout(()=>{
            setDis(false)
        },3000)
    }

    const submitBlog = (e)=>{
        e.preventDefault()
        const url = URL  + 'blogs'
        fetch(url,{
            method:'POST',
            body:JSON.stringify(blog),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).then(data=>{
            if(data.isSuccessful){
                displayNotice('upload successful;)')
            }else{
                displayNotice('Error occured!')
            }
        })

        setBlog({
            title:'',
            date:'',
            content:'',
            readTime:''
        })
    }
    return (
        <div className='ad-c-m'>
            <p className={isDis?'n-d n-p':'n-b n-p'}>{notice}</p>
            <p className='h'>Add Blog</p>
            <form className='adb-form' onSubmit={submitBlog}>
                <div className='br wr'>
                    <input onChange={onchange} type="text" name='title' className='f-i b-i' placeholder='Enter Title..' value={blog.title}/>
                    <input onChange={onchange} type="text" name='readTime' className='f-i b-i' placeholder='read time' value={blog.readTime} />
                    <input onChange={onchange} type="date" name='date' className='f-i b-i' placeholder='Date' value={blog.date} />
                </div>
                <textarea name='content' value={blog.content} onChange={onchange} className='f-i f-i-a'  rows='10' placeholder='Start Typing..'/>
                <input className='b-b' type='button' onClick={submitBlog} onSubmit={submitBlog} value='Upload'/>
            </form>
        </div>
    )
}