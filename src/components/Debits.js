// import React from "react"
// import {Link} from "react-router-dom"
// import {useState, useEffect, useRef} from "react"
// import axios from 'axios'
// import AccountBalance from "./AccountBalance"

// export default function Debits(props){

//     const [debitsData, setDebitsData] = useState([])
//     const debtURL = "https://moj-api.herokuapp.com/debits"

//     useEffect(() => {
//         const fetchData = async () => { 
//             const result = await axios(debtURL,);
//             setDebitsData(result.data);

//         }; 
//         fetchData();
//     }, [])

//     let totalDebits = 0;
//     const renderDebits = debitsData?.map((item) => {
//         let date = new Date(item.date)
//         totalDebits += item.amount;

//         return (
//             <div key={item.id}>
//                 <p>{item.description}</p>
//                 <p>-{item.amount}</p>
//                 <p>{date.toDateString()}</p>
//                 <hr/>
//             </div>

//         );
//     })

//     let newBalance = props.accountBalance-totalDebits;
//     console.log("Total Debits: " + totalDebits);
//     console.log("New Balance: " + newBalance);
//     useEffect(() => {
//         props.updateBalance(newBalance)
//     }, [])

//     return(
//         <div>
//             <Link to="/">Home</Link><hr/>
//         <h1>DEBITS: </h1>
//         <AccountBalance accountBalance={newBalance}/>
//         {renderDebits}

//         </div>
//     )
// }
import React from 'react';
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Debits(props) {


    const [debit, setDebit] = React.useState([]);
    const [data, setNewData] = React.useState([{
        amount: 0,
        description: "",
        date: ""
    }]);

    React.useEffect(function () {
        if (props.login) {
            fetch("https://moj-api.herokuapp.com/debits")
                .then(res => res.json())
                .then(data => setDebit(data))
        }
    }, [props.login])

    //sort the date
    debit.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
    const display = debit.map((d, index) => <div key={index} className='debit'><li className='date'>{new Date(d.date).toLocaleDateString()}</li><li>{d.description}</li><li>{d.amount}</li></div>)

    //listen for submit
    function handleSubmit(e) {
        e.preventDefault()
        if (data.description && data.amount && data.date) {
            setDebit([...debit, data])
            props.onChange("-" + data.amount) //send back the amount enter to parent(App)
        }
    }

    //listen for description input field
    async function descriptionChange(e) {
        console.log(e.target.value)
        await setNewData({ ...data, description: e.target.value, date: new Date().toISOString().toString() })
    }

    //listen for amount input field
    async function amountChange(e) {
        await setNewData({ ...data, amount: e.target.value, date: new Date().toISOString().toString() })
    }

    return (
        <div>
            {!props.login && <Navigate to="/" />}
            {props.login && <>
                <div className='links'>
                    <h3>BY: Farai Mutukumira, Kristy Delacru, Raja Awais Azhar </h3>
                    <Link to="/" className="loglink">Home</Link>
                    <Link to="/userProfile" className="loglink">User Profile</Link>
                    <Link to="/Credits" className="loglink">Credits</Link>
                </div>
                <h1 className='titles'>Debits</h1>
                <div className='balance'>Balance: ${props.accountBalance}</div>
                <div className='debits'>{display}</div>
                <form onSubmit={handleSubmit}>
                    <div className='input'>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" onChange={descriptionChange} />
                    </div>
                    <div className='input'>
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" onChange={amountChange} />
                    </div>
                    <button>Add Debit</button>
                </form>
            </>}
        </div>
    );
}

export default Debits