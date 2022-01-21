import React from "react"
import {Link} from "react-router-dom"

export default function UserProfile(props){
    return(
        <div>
            <Link to="/">Home</Link>
            
            <h1>User Profile</h1>

            <div>Username: {props.currentUser.userName}</div>
            <div>Member Since: {props.currentUser.memberSince}</div>
        </div>
    )
}