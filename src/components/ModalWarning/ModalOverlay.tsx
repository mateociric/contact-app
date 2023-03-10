import React, { useContext } from 'react'
import ctxStoreValues from 'store/store-context';
import { TUser } from 'model/model-card';
import './ModalOverlay.scss';

function ModalOverlay(props: { onClick: Function, userInfo: TUser }) {

    const ctxValues = useContext(ctxStoreValues);

    return (
        <div className='modaloverlay'>
            <header className='modaloverlay__header'>DELETE CARD</header>
            <p className='modaloverlay__text'>Are you sure that you want delete this card?</p>
            <footer className='modaloverlay__footer'>
                <button onClick={
                    () => {
                        props.onClick();
                        ctxValues.updateUserList.removeUser(props.userInfo);
                        ctxValues.misc.setNumOfDeletedCards();
                    }} className='modaloverlay__footer__button'
                >YES</button>
                <button onClick={() => { props.onClick() }} className='modaloverlay__footer__button'>NO</button>
            </footer>
        </div>
    )
}

export default ModalOverlay;