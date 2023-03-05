import React, { useContext } from 'react';
import 'components/Searchbar/Searchbar.scss';
import { useLocation } from 'react-router-dom';
import ctxStoreValues from 'store/store-context';

function Seacrbar() {

    const ctxValues = useContext(ctxStoreValues);
    const currLocation = useLocation();

    function inputChangeHandler(event: any) {
        //removing white spaces dynamically
        event.target.value = event.target.value.replace(/^[ \t]+|[ \t]+$/gm, "")
        ctxValues.getSearchBarValue(event.target.value);
    }

    return (
        <div className='searchbar'>
            <input
                onKeyUp={inputChangeHandler}
                style={currLocation.pathname === '/' ? { visibility: 'visible' } : { visibility: 'hidden' }}
                type="text"
                placeholder='serach for user'
                className='searchbar__input' />
        </div>
    )
}

export default Seacrbar;
