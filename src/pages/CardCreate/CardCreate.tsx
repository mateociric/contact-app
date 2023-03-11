import React, { useContext } from 'react';
import Form from 'components/Form/Form';
import { TUser } from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import validateForm from 'pages/utility/form-validate';

function CreateCard() {

    const ctxValues = useContext(ctxStoreValues);

    function submitHandler(event: any) {
        event.preventDefault();
        const isEveryInputOk = validateForm(document.querySelector('form')!);
        if (isEveryInputOk) {
            const user: TUser = {
                photo: (document.getElementById('userPhoto') as HTMLImageElement).src,
                firstName: (document.getElementById('firstName') as HTMLInputElement).value,
                lastName: (document.getElementById('lastName') as HTMLInputElement).value,
                phoneNumber: +(document.getElementById('phoneNumber') as HTMLInputElement).value,
                emailAddress: (document.getElementById('emailAddress') as HTMLInputElement).value,
                isFavorite: false,
                isDelete: false,
                //to avoid same id
                id: ctxValues.values.numOfCreatedCards,
            }
            ctxValues.updateUserList.addUser(user);
            ctxValues.misc.setNumOfCreatedCards();
            //form and user photo reset
            document.querySelector('form')!.reset();
            (document.getElementById('userPhoto') as HTMLImageElement).src = require('photo/default-photo.png');
        }
    }

    return (
        <Form onSubmit={submitHandler} buttonText={'Add User'}></Form>
    )
}

export default CreateCard;