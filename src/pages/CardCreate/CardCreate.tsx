import React, { useContext } from 'react';
import Form from 'components/Form/Form';
import { TUser } from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import validateForm from 'utility/form-validate';
import DB_OPERATIONS from 'utility/db';

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
                phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement).value,
                emailAddress: (document.getElementById('emailAddress') as HTMLInputElement).value,
                isFavorite: false,
                isDelete: false,
                //avoid same id
                id: !ctxValues.values.usersList.length ? 1 : (ctxValues.values.usersList[ctxValues.values.usersList.length - 1].id) + 1
            }
            ctxValues.updateUserList.addUser(user);
            DB_OPERATIONS.saveUserToDB(user);
            document.querySelector('form')!.reset();
        }
    }

    return (
        <Form onSubmit={submitHandler} buttonText={'Add User'}></Form>
    )
}

export default CreateCard;