import React from "react"
import AccountBalance from "./AccountBalance"
import { Link } from "react-router-dom"


export default function Home(props) {

    return (
        <div>
            <h1>Bank of React</h1>
            <Link to="/userProfile">User Profile</Link>
            <br /><br />
            <Link to="/debits">Debits</Link>
            <br /><br />
            <Link to="/credits">Credits</Link>
            <br /><br />
            <Link to="/login">Login</Link>
            <hr />
            <AccountBalance accountBalance={props.accountBalance} />
        </div>
    )
}