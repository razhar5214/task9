import React from "react"
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from 'axios'
import AccountBalance from "./AccountBalance"

export default function Credits(props){

    const [creditsData, setCreditsData] = useState()
    const creditsURL = "https://moj-api.herokuapp.com/credits";
    
    useEffect(() => {
        const fetchData = async () => { 
            const result = await axios(creditsURL,);
            setCreditsData(result.data);
        }; 
        fetchData();
    }, [])
    let totalCredits = 0;
    const renderCredits = creditsData?.map((item) => {
        let date = new Date(item.date)
        totalCredits += item.amount;
        
        return (
            <div key={item.id}>
                <p>{item.description}</p>
                <p>{item.amount}</p>
                <p>{date.toDateString()}</p>
                <hr/>
            </div>
        );
    })
    let newBalance = props.accountBalance+totalCredits;
    console.log("Total Credits: " + totalCredits);
    console.log("New Balance: " + newBalance);
    useEffect(() => {
        props.updateBalance(newBalance)
    }, [])

    return(
        <div>
            <Link to="/">Home</Link><hr/>
            <h1>Credits: </h1>
            <AccountBalance accountBalance={newBalance}/>
            {renderCredits}
        </div>
    )
}