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

    const navigate = useNavigate();
    const ctxValues = useContext(ctxStoreValues);

    const isFavoriteMarked = props.userInfo.isFavorite ? 'iconActive iconEdit' : 'iconEdit';
    const isDelete = props.userInfo.isDelete ? 'iconActive iconEdit' : 'iconEdit';
    const trashIcon = <FontAwesomeIcon
        icon={faTrash}
        onClick={(event) => {
            event.stopPropagation();
            ctxValues.updateUserList.changeUserInfo('delete', props.userInfo);
        }}
        className={isDelete}
    />
    const pencilIcon = <FontAwesomeIcon
        icon={faPencil}
        className='iconEdit'
        onClick={(event) => {
            event.stopPropagation();
            ctxValues.misc.getUserForModifie(props.userInfo);
            navigate(`/CardModifie/${props.userInfo.fullName}/${props.userInfo.id}`)
        }
        }
    />
    const heartIcon = <FontAwesomeIcon
        icon={faHeart}
        onClick={(event) => {
            event.stopPropagation();
            ctxValues.updateUserList.changeUserInfo('favorite', props.userInfo);
        }}
        className={isFavoriteMarked}

    />
    const userPhoto = props.userInfo.photo || <FontAwesomeIcon icon={faUser} className='iconFaUser' />

    function removeModalHandler() {
        ctxValues.updateUserList.changeUserInfo('delete', props.userInfo);
    }

    return (
        <>
            {props.userInfo.isDelete && <ModalWarning onClick={removeModalHandler} userInfo={props.userInfo} />}
            <div
                onClick={() => {
                    ctxValues.misc.getUserForModifie(props.userInfo);
                    navigate(`/CardModifie/${props.userInfo.fullName}/${props.userInfo.id}`)
                }
                }
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
        </>
    )
}

export default Card;