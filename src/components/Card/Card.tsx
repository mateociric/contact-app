import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import ModalWarning from 'components/ModalWarning/ModalWarning';
import 'components/Card/Card.scss';
import 'style/utility.scss';
import { TUser } from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import DB_OPERATIONS from 'utility/db';

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
            DB_OPERATIONS.isFavoriteUser(props.userInfo);
        }}
        className={isFavoriteMarked}
    />
    const userPhoto = props.userInfo.photo === require('photo/default-photo.png') ?
        <FontAwesomeIcon icon={faUser} className='iconFaUser fa-icon-center' /> :
        <img src={`${props.userInfo.photo}`} alt="" className='card__photo' />


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
                <div className='card__photo fa-icon-center'>
                    {userPhoto}
                </div>
                <div className='card__details'>
                    <p>{props.userInfo.firstName} {props.userInfo.lastName}</p>
                    <p>{props.userInfo.phoneNumber}</p>
                    <p>{props.userInfo.emailAddress}</p>
                </div>
            </div>
        </>
    )
}

export default Card;