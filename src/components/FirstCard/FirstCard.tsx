import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'components/FirstCard/FirstCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function FirstCard() {
    const navigate = useNavigate();
    return (
        <>
            <div className='first-card' onClick={() => navigate('/CardCreate')}>
                <FontAwesomeIcon icon={faCirclePlus} className='iconFaCirclePlus fa-icon-center' />
            </div>
        </>
    )
}

export default FirstCard;