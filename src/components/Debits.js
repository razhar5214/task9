import React from "react"
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from 'axios'

export default function Debits(props){

    const [debitsData, setDebitsData] = useState()
    const debtURL = "https://moj-api.herokuapp.com/debits"
    
    useEffect(() => {
        const fetchData = async () => { 
            const result = await axios(debtURL,);
            setDebitsData(result.data);
        }; 
        fetchData();
    }, [])
    // console.log(debitsData)
    const renderDebits = debitsData?.map((item) => {
        let date = new Date(item.date)
        return (
            <div key={item.id}>
                <p>{item.description}</p>
                <p>-{item.amount}</p>
                <p>{date.toDateString()}</p>
                <hr/>
            </div>
            
        );
    })

    return(
        <div>
            <Link to="/">Home</Link><hr/>
        <h1>DEBITS: </h1>
         {renderDebits}
        </div>
    )
}