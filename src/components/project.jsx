import React, { useState } from "react";


export default function Project(props){
    const project = props.project

    const [isDropOpen,setDrop] = useState(false)

    const toggleDrop = ()=>{
        isDropOpen?setDrop(false):setDrop(true);
    }

    return (
        <div className='project'>
            <p  className='p-n'>{project.name}</p>
            <div className='wr'>    
                <p className='p-c'>completed at {project.completed}</p>
                <p className='p-s'>{project.stack}</p>
            </div>
            <div className={isDropOpen?'m-d-v':'m-d'}>
                <p className='p-d'>{project.des}</p>
                <div className='wr'>
                    <a href={project.visit}><p className='vis'> <span className='fa fa-globe'></span> Visit</p></a>
                    <a href={project.github}><p className='git'> <span className='fa fa-github'></span> Github</p></a>
                </div>
            </div>
            <p onClick={toggleDrop} className={isDropOpen?'s-l':'s-m'}>See {isDropOpen?'Less..':'More..'}</p>
        </div>
    )
}