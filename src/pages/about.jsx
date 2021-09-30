import React from "react";
import Contact from "../components/contact";
import profile from '../images/b&wme.jpeg'
import sign from '../images/sign.png'
import '../style/about.css'
function About(){
    return(
        <div className='main' style={{backgroundColor:'white'}}>
            <p className='h'>About</p>
            <div className='a-box'>
                <img src={profile} alt="my pic here !" className='pic'/>
                <div>
                    <p className='a-m'>
                        My name is Akhlesh Soni. I am going on Twenty and live in Pendra, India. I’m a Student, a Geek, an introvert and a minimalist. I also love traveling.
                        <br /> <br /> I work as a software engineer, helping build inclusive and performant software.</p>
                    <img src={sign} alt=""  className='sign'/>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default About;