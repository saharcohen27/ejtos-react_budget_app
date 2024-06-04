import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

const Currency = () => {
    const {dispatch, currency} = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
  
    const currencies = {
        '$':'Dollar',
        '£':'Pound',
        '€': 'Euro',
        '₹': 'Rupee'
    }
    
    const changeCurrency = (val) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
            setIsOpen(false)
        }

    

  return (
    <div >
        <button className='alert currency-container' 
                onClick={() => setIsOpen(prev => !prev)}>
            Currency: ({currency} {currencies[currency]})
            <span>&#x25BE;</span>
        </button>
        {isOpen && <ul className='dropdown'>

                <li onClick={event=>changeCurrency('$')}>$ Dollar</li>
                <li onClick={event=>changeCurrency('£')}>£ Pound</li>
                <li onClick={event=>changeCurrency('€')}>€ Euro</li>
                <li onClick={event=>changeCurrency('₹')}>₹ Rupee</li>
            </ul>
        }

        </div>
    );
};

export default Currency;