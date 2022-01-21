import React from "react"
import {useState} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Navigate} from 'react-router-dom'

export default function Login(props){
    //console.log(props)
    const [credentials, setCredentials] = useState({
        user:{
            userName: "",
            password: ""
        }, 
        redirect: false
    });
    const handleChange = (event) =>{
        const updatedUser = {...credentials.user}
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue
    
        setCredentials({user: updatedUser})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        props.mockLogIn(credentials.user)
        setCredentials({redirect: true})
    }
    if (credentials.redirect) {
        return (<Navigate to="/userProfile"/>)
    } 
   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input 
                        type="text" 
                        name="userName" 
                        value={credentials.user.userName}
                        onChange={handleChange}
                        
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                    />
                </div>
                <button>Log In</button>
            </form>
        </div>
    )
}