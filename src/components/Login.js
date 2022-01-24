import React from "react"
import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Navigate } from 'react-router-dom'

export default function Login(props) {

    const [credentials, setCredentials] = useState({
        user: {
            userName: "",
            password: ""
        },
        redirect: false
    });
    const handleChange = (event) => {
        const updatedUser = { ...credentials.user }
        const inputField = event.target.name
        const inputValue = event.target.value
        updatedUser[inputField] = inputValue

        setCredentials({ user: updatedUser })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.mockLogIn(credentials.user)
        setCredentials({ redirect: true })
    }
    if (credentials.redirect) {
        return (<Navigate to="/userProfile" />)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="logInfo">
                    <div>
                        <label htmlFor="userName">User Name:</label>
                        <input
                            className="inputbtn"
                            type="text"
                            name="userName"
                            placeholder="user name..."
                            value={credentials.user.userName}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <label htmlFor="password">Enter Password:</label>
                        <input
                            placeholder="password..."
                            type="password"
                            name="password"
                        />
                    </div>
                </div>
                <button className="logbtn">Log In</button>
                <img className="bank-pic" src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="bank" />"
            </form>
        </div>
    )
}