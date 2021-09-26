import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from "../components/footer";
import Nav from "../components/nav";
import About from "./about";
import Archive from "./archive";
import Blog from "./blog";
import Blogs from "./blogs";
import Home from "./home";
import Projects from "./projects";


export default function Landing(props){

    const links = [
        {
            title:'Home',
            url:'/'
        },
        {
            title:'About',
            url:'/about'
        },
        {
            title:'Writings',
            url:'/blogs'
        },
        {
            title:'Archive',
            url:'/archive'
        }
        
    ]

    const heading = 'Akhlesh Soni'

    return (
        <div>
            <Router>
                <Nav links={links} heading={heading}/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/blogs' exact component={Blogs}/>
                    <Route path='/blog/:id' component={Blog}/>
                    <Route path='/archive' component={Archive}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    )
}