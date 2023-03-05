import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import 'components/FirstCard/FirstCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import CardCreate from 'pages/CardCreate/CardCreate';

function FirstCard() {
    const navigate = useNavigate()
    return (
        <>
            <div className='card' onClick={() => navigate('/CardCreate')}>
                <FontAwesomeIcon icon={faCirclePlus} className='iconFaCirclePlus' />
            </div>
            <Routes>
                <Route path='/CardCreate' element={<CardCreate />}></Route>
            </Routes>
        </>
    )
}

export default FirstCard;