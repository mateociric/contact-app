import React, { useContext } from 'react';
import Form from 'components/Form/Form';
import validateForm from 'pages/utility/form-validate';
import 'pages/CardModifie/CardModifie.scss';
import ctxStoreValues from 'store/store-context';
import { TUser } from 'model/model-card';
import { useParams } from 'react-router-dom';

function CardModifie() {

    const ctxValues = useContext(ctxStoreValues);
    const { fullName, id } = useParams();

    console.log(fullName, id);

    const userForModifie = ctxValues.values.user;

    function submitHandler(event: any) {
        event.preventDefault();
        const isEveryInputOk = validateForm(document.querySelector('form')!);
        // if (isEveryInputOk) {
        //     const user: TUser = {
        //         photo: '',
        //         name: event.target['firstName'].value,
        //         surname: event.target['lastName'].value,
        //         phoneNumber: event.target['phoneNumber'].value,
        //         emailAddress: event.target['emailAddress'].value,
        //         isFavorite: ctxValues.userForModifie.isFavorite,
        //         isDeleted: ctxValues.userForModifie.isDeleted,
        //         id: ctxValues.userForModifie.id,
        //     }
        //     ctxValues.updateUserList()
        // }
    }

    return <Form onSubmit={submitHandler} buttonText={'Modifie User'} userInfo={userForModifie as TUser} />

}


export default CardModifie;