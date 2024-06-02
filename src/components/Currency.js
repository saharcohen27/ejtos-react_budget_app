import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch, currency} = useContext(AppContext);

  const currencies = [
    { symbol: '$', name: 'Dollar' },
    { symbol: '£', name: 'Pound' },
    { symbol: '€', name: 'Euro' },
    { symbol: '₹', name: 'Rupee' },
  ];

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <label className='alert bg-success text-white' htmlFor='Currency'>Currency:<select 
                value={currency}
                name="Currency"
                id="Currency"
                onChange={event=>changeCurrency(event.target.value)}
                >

                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </label>
                
    );
};

export default Currency;