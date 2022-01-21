import React from "react"
import {Link} from "react-router-dom"
import {useState, useEffect, useRef} from "react"
import axios from 'axios'
import AccountBalance from "./AccountBalance"

export default function Debits(props){

    const [debitsData, setDebitsData] = useState([])
    const debtURL = "https://moj-api.herokuapp.com/debits"
    
    useEffect(() => {
        const fetchData = async () => { 
            const result = await axios(debtURL,);
            setDebitsData(result.data);
            
        }; 
        fetchData();
    }, [])

    let totalDebits = 0;
    const renderDebits = debitsData?.map((item) => {
        let date = new Date(item.date)
        totalDebits += item.amount;

        return (
            <div key={item.id}>
                <p>{item.description}</p>
                <p>-{item.amount}</p>
                <p>{date.toDateString()}</p>
                <hr/>
            </div>

        );
    })

    let newBalance = props.accountBalance-totalDebits;
    console.log("Total Debits: " + totalDebits);
    console.log("New Balance: " + newBalance);
    useEffect(() => {
        props.updateBalance(newBalance)
    }, [])

    return(
        <div>
            <Link to="/">Home</Link><hr/>
        <h1>DEBITS: </h1>
        <AccountBalance accountBalance={newBalance}/>
        {renderDebits}
         
        </div>
    )
}