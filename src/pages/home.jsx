import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog from "../components/blog";
import Project from "../components/project";
import { URL } from "../config";
import '../style/home.css'
function Home(){

    const [blogs,setBlogs] = useState([])

    const url_blog = URL + 'blogs'
    const url_projects = URL + 'projects'
    const [projects,setProjects] = useState([])

    useEffect(()=>{
        getBlogs()
        getProjects()
    },[])


    const getBlogs = ()=>{
        fetch(url_blog).then(res=>res.json()).then(data=>{
            setBlogs([data[0]])
        })
    }

    const getProjects = ()=>{
        fetch(url_projects).then(res=>res.json()).then(data=>{
            setProjects([data[0]]) 
        })
        
    }
    return(
        <div className='main' style={{backgroundColor:'white'}}>
            <div className='desc'>
                <p className='ht'>
                    Hi friends ! I am Akhlesh. I'm a software Engineer and simplistic. <br />
                </p>
                Currently I'm Studying computer science engineering from Shri shankaracharya technical campus, bhilai. I have worked in web dev domain for almost three year at Developer student club. I'm a good person.
            </div>
            <div className='blog-p'>
                <p className='h'>
                    My Writings
                </p>
                {blogs.map(blog=>(
                    <Blog key={blog.id} blog={blog}/>
                ))}
                <Link style={{textDecoration:'none',color:'black',fontWeight:600,fontSize:'14px'}} to='/blogs'>See More Blogs..</Link>
            </div>
            <div className='blog-p'>
                <p className='h'>My Personal Projects</p>
                {projects.map(project=>(
                    <Project project={project}/>
                ))}
                <Link style={{textDecoration:'none',color:'black',fontWeight:600,fontSize:'14px'}} to='/projects'>See More Projects..</Link>
            </div>
        </div>
    )
}

export default Home;