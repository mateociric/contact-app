import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './CreateCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Create from '../../Create/Create';

function CreateCard() {
    const navigate = useNavigate()
    return (
        <>
            <div className='card' onClick={() => navigate('/Create')}>
                <FontAwesomeIcon icon={faCirclePlus} className='icon' />
            </div>
            <Routes>
                <Route path='/Create' element={<Create />}></Route>
            </Routes>
        </>
    )
}

export default CreateCard;