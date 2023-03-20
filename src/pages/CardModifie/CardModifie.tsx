import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from 'components/Form/Form';
import { TUser } from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import validateForm from 'utility/form-validate';
import DB_OPERATIONS from 'utility/db';

function CardModifie() {
    const ctxValues = useContext(ctxStoreValues);
    const navigate = useNavigate();

    function submitHandler(event: any) {
        event.preventDefault();
        const isEveryInputOk = validateForm(document.querySelector('form')!);
        if (isEveryInputOk) {
            const user: TUser = {
                photo: (document.querySelector('img') as HTMLImageElement).src,
                firstName: event.target['firstName'].value,
                lastName: event.target['lastName'].value,
                phoneNumber: event.target['phoneNumber'].value,
                emailAddress: event.target['emailAddress'].value,
                isFavorite: ctxValues.values.userForModifie.isFavorite,
                isDelete: ctxValues.values.userForModifie.isDelete,
                id: ctxValues.values.userForModifie.id,
            }
            ctxValues.updateUserList.changeUserInfo('info', user);
            DB_OPERATIONS.modifieUser(user, 'user');
            navigate('/');
        }
    }

    return <Form onSubmit={submitHandler} buttonText={'Modifie User'} userInfo={ctxValues.values.userForModifie} />
}

export default CardModifie;