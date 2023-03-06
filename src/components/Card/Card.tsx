import React, { useState, useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import CardModifie from 'pages/CardModifie/CardModifie'
import ModalWarning from 'components/ModalWarning/ModalWarning';
import { TUser } from 'model/model-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import 'components/Card/Card.scss';
import ctxStoreValues from 'store/store-context';

function Card(props: { userInfo: TUser }) {

    const [isFavorite, setIsFavorite] = useState(props.userInfo.isFavorite);
    const [isTrash, setIsTrash] = useState(props.userInfo.isDeleted);
    const navigate = useNavigate();
    const ctxValues = useContext(ctxStoreValues);

    useEffect(() => {
        /* to get current value of the useState hook (useState is async!),
        otherwise you can flip value !isFavorite without useing useEffect */
        ctxValues.updateUserList(props.userInfo.id, isFavorite);
    }, [isFavorite]);

    const isFavoriteMarked = isFavorite ? 'iconActive iconEdit' : 'iconEdit';
    const isTrashMarked = isTrash ? 'iconActive iconEdit' : 'iconEdit';
    const trashIcon = <FontAwesomeIcon
        icon={faTrash}
        onClick={(event) => {
            event.stopPropagation();
            setIsTrash(() => !isTrash);
        }}
        className={isTrashMarked}
    />
    const pencilIcon = <FontAwesomeIcon
        icon={faPencil}
        className='iconEdit'
    />
    const heartIcon = <FontAwesomeIcon
        icon={faHeart}
        onClick={(event) => {
            event.stopPropagation();
            setIsFavorite(!isFavorite);
        }}
        className={isFavoriteMarked}
    />
    const userPhoto = props.userInfo.photo || <FontAwesomeIcon icon={faUser} className='iconFaUser' />

    function removeModalHandler() {
        setIsTrash(() => !isTrash);
    }

    return (
        <>
            {isTrash && <ModalWarning onClick={removeModalHandler} userInfo={props.userInfo} />}
            <div
                onClick={() => navigate(`/CardModifie/${props.userInfo.id}`)}
                className='card'
            >
                <div className='card__edit-icon'>
                    {trashIcon} {pencilIcon} {heartIcon}
                </div>
                {userPhoto}
                <section className='card__details'>
                    <p>{props.userInfo.name} {props.userInfo.surname}</p>
                    <p>{props.userInfo.id}</p>
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