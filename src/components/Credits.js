import React from 'react';
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Credits(props) {



    const [credit, setCredit] = React.useState([]);
    const [data, setNewData] = React.useState([{
        amount: 0,
        description: "",
        date: ""
    }]);
    // fetches credit history when page loads
    React.useEffect(function () {
        if (props.login) {
            fetch("https://moj-api.herokuapp.com/credits")
                .then(res => res.json())
                .then(data => setCredit(data))
        }
    }, [props.login])

    //sort the date
    credit.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
    const display = credit.map((c, index) => <div key={index} className='credit'>
        <li className='date'>{new Date(c.date).toLocaleDateString()}</li>
        <li>{c.description}</li>
        <li>{c.amount}</li>
    </div>)

    //listen for submit
    function handleSubmit(e) {
        e.preventDefault()
        if (data.description && data.amount && data.date) {
            setCredit([...credit, data])
            props.onChange(data.amount)
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
            {props.login &&
                <>
                    <div className='links'>
                        <h3>BY: Farai Mutukumira, Kristy Delacru, Raja Awais Azhar </h3>
                        <Link to="/" className="loglink">Home</Link>
                        <Link to="/userProfile" className="loglink">User Profile</Link>
                        <Link to="/Debits" className="loglink">Debits</Link>
                    </div>
                    <h1 className='titles'>Credits</h1>
                    <div className='balance'>Balance: ${props.accountBalance}</div>
                    <div className='credits'>{display}</div>
                    <form onSubmit={handleSubmit}>
                        <div className='input'>
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" onChange={descriptionChange} />
                        </div>
                        <div className='input'>
                            <label htmlFor="amount">Amount</label>
                            <input type="number" name="amount" onChange={amountChange} />
                        </div>
                        <button>Add Credit</button>
                    </form>
                </>
            }
        </div>
    );


}

export default Credits;