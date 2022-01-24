import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

    console.log(props);
    return (
        <div>

            <div className='links'>
                <h3>BY: Farai Mutukumira, Kristy Delacru, Raja Awais Azhar </h3>
                <Link to="/userProfile" className="loglink">User Profile</Link>
                <Link to="/Debits" className="loglink">Debits</Link>
                <Link to="/Credits" className="loglink">Credits</Link>
            </div>
            <h1 className='titles'>Weclome to Bank of React</h1>
            <div className="login-el">
                <p>Please Login to get started: </p>
                <Link to="/login" className="loglink">Login</Link>
            </div>
            <img className="bank-pic" src="https://thefinanser.com/wp-content/uploads/2021/09/bank.jpeg" alt="bank" />
        </div>
    )
}

export default Home;

{/* <img className="bank-pic" src="//www.chetu.com/img/banking/online-banking/sliderbg/online-banking-banner.jpg" alt="bank" /> */ }