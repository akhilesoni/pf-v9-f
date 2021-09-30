import React, { useEffect, useState } from "react";
import Pbar from "../components/pbar";
import Project from "../components/project";
import { URL } from "../config";
import '../style/project.css'
import '../App.css'
function Projects(){

    const [projects,setProjects] = useState([])
    const [pbar,setPbar] = useState(true)

    const url = URL+'projects'

    useEffect(()=>{
        getProjects()
        return ()=>{
            setProjects([])
        }
    },[])


    const getProjects = ()=>{
        fetch(url).then(res=>res.json()).then(data=>{
            setProjects(data)
            setPbar(false)
        })
    }
    return(
        <div className='main'>
            <p className='h'>Projects</p>
            {projects.map(project=>(
                <Project project={project}/>
            ))}
            <div className={pbar?'pbar':'pbar-b'}>
               <Pbar/>
            </div>
        </div>
    )
}

export default Projects;