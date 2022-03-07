import React from 'react'
import { useDispatch } from 'react-redux';
import { actioncreators } from './actioncreators/index';

const Bank=() => {

    const dispatch=useDispatch()
    return (

    <div>
          <button onClick={()=>{dispatch(actioncreators.deposit(200))}}>CREDIT</button>
          
          <button onClick={()=>{dispatch(actioncreators.withdraw(200))}}>DEBIT</button>
      </div>
    
    
  )
}


export default Bank;