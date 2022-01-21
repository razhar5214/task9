import React from "react"

export default function AccountBalance(props){

        return(
        <div>
           <h2> Account Balance: $ {props.accountBalance.toFixed(2)}</h2>
        </div>
    )
}