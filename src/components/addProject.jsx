import React, { useState } from "react";
import { URL } from "../config";
import '../style/admin.css'
export default function AddProject(){

    const [project,setProject] = useState({
        name:'',
        completed:'',
        stack:'',
        des:'',
        visit:'',
        github:''
    })

    const [notice,setNotice] = useState('');

    const [isDis,setDis] = useState(false)

    const onchange = (e)=>{
        e.preventDefault()

        let name = project.name
        let completed = project.completed
        let stack = project.stack
        let des = project.des
        let visit = project.visit
        let github = project.github
        let nam = e.target.name;
        let value = e.target.value;


        switch(nam){
            case 'name':
                name = value
                break
            case 'completed':
                completed = value
                break
            case 'stack':
                stack = value
                break
            case 'des':
                des = value
                break
            case 'visit':
                visit = value
                break
            case 'github':
                github = value
                break
        }

        setProject({
            name:name,
            completed:completed,
            stack:stack,
            des:des,
            visit:visit,
            github:github
        })
        
    }

    const displayNotice = (notice) =>{
        setDis(true)
        setNotice(notice)
        setTimeout(()=>{
            setDis(false)
        },3000)
    }

    const submitProject = (e)=>{
        e.preventDefault()
        console.log(project)
        const url = URL  + 'projects'
        fetch(url,{
            method:'POST',
            body:JSON.stringify(project),
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

        setProject({
            name:'',
            completed:'',
            stack:'',
            des:'',
            visit:'',
            github:''
        })
    }
    return (
        <div className='ad-c-m'>
            <p className={isDis?'n-d n-p':'n-b n-p'}>{notice}</p>
            <p className='h'>Add Project</p>
            <form className='adb-form' onSubmit={submitProject}>
                <div className='br wr'>
                    <input onChange={onchange} type="text" name='name' className='f-i b-i' placeholder='Enter name..' value={project.name}/>
                    <input onChange={onchange} type="text" name='stack' className='f-i b-i' placeholder='stack' value={project.stack} />
                    <input onChange={onchange} type="date" name='completed' className='f-i b-i' placeholder='completed on' value={project.completed} />
                </div>
                <textarea name='des' value={project.des} onChange={onchange} className='f-i f-i-a'  rows='10' placeholder='Start Typing..'/>
                <input  onChange={onchange} type="text" name="visit" className='f-i f-i-a' placeholder='visiting url' value={project.visit} />
                <input  onChange={onchange} type="text" name="github" className='f-i f-i-a' placeholder='github' value={project.github} />
                <input className='b-b' type='button' onClick={submitProject} onSubmit={submitProject} value='Upload'/>
            </form>
        </div>
    )
}