import React, { useEffect, useState } from "react";
import Project from "../components/project";
import { URL } from "../config";
import '../style/project.css'
function Projects(){

    const [projects,setProjects] = useState([])

    const url = URL+'projects'

    useEffect(()=>{
        getProjects()
    })


    const getProjects = ()=>{
        fetch(url).then(res=>res.json()).then(data=>setProjects(data))
    }
    return(
        <div className='main'>
            <p className='h'>Projects</p>
            {projects.map(project=>(
                <Project project={project}/>
            ))}
        </div>
    )
}

export default Projects;