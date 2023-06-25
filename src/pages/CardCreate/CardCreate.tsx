import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from 'components/Form/Form';
import { TUser } from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import validateForm from 'utility/form-validate';
import DB_OPERATIONS from 'utility/db';

function CreateCard() {
    const ctxValues = useContext(ctxStoreValues);
    const navigate = useNavigate();

    function submitHandler(event: any) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const isEveryInputOk = validateForm(event.currentTarget);
        if (isEveryInputOk) {
            const user: TUser = {
                photo: (document.querySelector('img') as HTMLImageElement).src,
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
                phoneNumber: formData.get('phoneNumber') as string,
                emailAddress: formData.get('emailAddress') as string,
                isFavorite: false,
                isDelete: false,
                //avoid same id
                id: !ctxValues.values.usersList.length ? 1 : ctxValues.values.usersList[ctxValues.values.usersList.length - 1].id + 1
            }
            ctxValues.updateUserList.addUser(user);
            DB_OPERATIONS.saveUser(user);
            navigate('/');
        }
    }

    return (
        <Form onSubmit={submitHandler} buttonText={'Add User'} srcPhoto={'defaultPhoto'}></Form>
    )
}

export default CreateCard;