import React, { useState } from "react";
import { Redirect } from "react-router";
import { URL } from "../config";
import '../style/auth.css'
export default function Auth(props){

    const [password, setPassword] = useState('')
    const [notice, setNotice] = useState('')
    const url = URL + 'authenticate'


    const isValid = (password) => {
        if(password===''){
            return false
        }
        return true
    }

    const authenticate = (e) =>{
        e.preventDefault()
        if(isValid(password)){
            fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    password:password
                }),
                headers: {
                    'Content-Type': 'application/json'
                  } 
            }).then(res=>res.json()).then(data=>{
                if(data.isValid){
                    console.log('kjsdjs')
                    localStorage.setItem('token',data.token)
                    return props.history.push('/admin')
                }else{
                    setNotice('Invalid Credential!')
                }
            })
        }
        else{
            setNotice('Password is required!')
        }
        
    }

    const passwordOnChange = (e)=>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div className='a-p'>
            <p className='au-h'>Good Day! Lord</p>
            <form className='f' onSubmit={authenticate} >
                <label>Code</label>
                <input 
                    type="password" 
                    name='password' 
                    placeholder='****' 
                    className='f-i' 
                    value={password}
                    onChange={passwordOnChange}
                    />
                <input onClick={authenticate} type='submit' value="Authenticate" className='f-s'/>
                <p className='notice'>{notice}</p>
            </form>
        </div>
    )
}