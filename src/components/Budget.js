
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispach, remaining } = useContext(AppContext);
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
        dispach({
            type:"SET_BUDGET",
            payload: event.target.value
        });

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;