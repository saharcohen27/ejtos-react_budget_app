
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, remaining, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        if (event.target.value > 20000){
            alert("can not go over 20k")
            return
        } else if (event.target.value < (budget - remaining) ){
            alert("can not go below total expenses " + (budget - remaining))
            return
        }
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;