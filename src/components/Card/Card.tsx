import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import CardModifie from 'pages/CardModifie/CardModifie'
import { TUser } from 'model/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import 'components/Card/Card.scss';

function Card(props: { userInfo: TUser }) {

    const [isFavorite, setIsFavorite] = useState(props.userInfo.isFavorite);
    const [isTrash, setIsTrash] = useState(props.userInfo.isDeleted);
    const navigate = useNavigate();

    const isFavoriteMarked = isFavorite ? 'iconActive iconEdit' : 'iconEdit';
    const isTrashMarked = isTrash ? 'iconActive iconEdit' : 'iconEdit';
    const userPhoto = props.userInfo.photo || <FontAwesomeIcon icon={faUser} className='iconFaUser' />

    return (
        <>
            <div onClick={() => navigate('/CardModifie')} className='card'>
                <div className='card__edit-icon'>
                    <FontAwesomeIcon icon={faTrash} onClick={(event) => { event.stopPropagation(); setIsTrash(() => !isTrash) }} className={isTrashMarked} />
                    <FontAwesomeIcon icon={faPencil} className='iconEdit' />
                    <FontAwesomeIcon icon={faHeart} onClick={(event) => { event.stopPropagation(); setIsFavorite(() => !isFavorite) }} className={isFavoriteMarked} />
                </div>
                {userPhoto}
                <section className='card__details'>
                    <p>{props.userInfo.name} {props.userInfo.surname}</p>
                    <p>{props.userInfo.phoneNumber}</p>
                    <p>{props.userInfo.emailAddress}</p>
                </section>
            </div>
            <Routes>
                <Route path='/CardModifie' element={<CardModifie />}></Route>
            </Routes>
        </>
    )
}

export default Card;
