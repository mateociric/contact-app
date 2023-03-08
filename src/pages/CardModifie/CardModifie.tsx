import React, { useContext } from 'react';
import Form from 'components/Form/Form';
import validateForm from 'pages/utility/form-validate';
import 'pages/CardModifie/CardModifie.scss';
import ctxStoreValues from 'store/store-context';
import { TUser } from 'model/model-card';

function CardModifie() {

    const ctxValues = useContext(ctxStoreValues);

    function submitHandler(event: any) {
        event.preventDefault();
        const isEveryInputOk = validateForm(document.querySelector('form')!);
        if (isEveryInputOk) {
            const user: TUser = {
                photo: '',
                name: event.target['firstName'].value,
                surname: event.target['lastName'].value,
                phoneNumber: event.target['phoneNumber'].value,
                emailAddress: event.target['emailAddress'].value,
                isFavorite: ctxValues.values.userForModifie.isFavorite,
                isDelete: ctxValues.values.userForModifie.isDelete,
                id: ctxValues.values.userForModifie.id,
            }
            ctxValues.updateUserList.changeUserInfo('info', user);
        }
    }

    return <Form onSubmit={submitHandler} buttonText={'Modifie User'} userInfo={ctxValues.values.userForModifie} />

}

export default CardModifie;