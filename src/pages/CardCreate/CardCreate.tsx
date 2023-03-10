import React, { useContext } from 'react';
import validateForm from 'pages/utility/form-validate';
import ctxStoreValues from 'store/store-context';
import Form from 'components/Form/Form';
import { TUser } from 'model/model-card';

function CreateCard() {

    const ctxValues = useContext(ctxStoreValues);

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
                isFavorite: false,
                isDelete: false,
                //to avoid same id during deleting crads 
                id: ctxValues.values.usersList.length + ctxValues.values.numOfDeletedCards,
            }
            ctxValues.updateUserList.addUser(user);
        }
    }

    return (
        <Form onSubmit={submitHandler} buttonText={'Add User'}></Form>
    )
}

export default CreateCard;