import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import AccountBalance from "./AccountBalance"

function UserProfile(props) {
    return (
        <div>
            {!props.info.currentUser.login && <Navigate to="/" />}
            {props.info.currentUser.login &&
                <>
                    <div className='links'>
                        <h3>BY: Farai Mutukumira, Kristy Delacru, Raja Awais Azhar </h3>
                        <Link to="/" className="loglink">Home</Link>
                        <Link to="/Debits" className="loglink">Debits</Link>
                        <Link to="/Credits" className="loglink">Credits</Link>
                    </div>
                    <h1 className='titles'>User Profile</h1>
                    <img src="https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg" width="300px" />
                    <div className='profile-el'>
                        <div className='info'>Username: {props.info.currentUser.userName}</div>
                        <div className='info'>Member Since: {props.info.currentUser.memberSince}</div>
                        <AccountBalance accountBalance={props.info.accountBalance} />
                    </div>
                </>
            }
        </div>
    );
}

export default UserProfile;