import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import validateForm from 'pages/CardCreate/utility/form-validate';
import ctxStoreValues from 'store/store-context';
import 'pages/CardCreate/CardCreate.scss';
import { TUser } from 'model/model-card';

function CreateCard() {

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
                isFavorite: false,
                isDeleted: false,
                id: Math.random()
            }
            ctxValues.addNewUser(user);
        }
    }

    return (
        <form onSubmit={submitHandler} className='create-card'>
            <img src="" alt="" />
            <input type="text" name='firstName' placeholder='first name' />
            <label></label>
            <input type="text" name='lastName' placeholder='last name' />
            <label></label>
            <input type="text" name='phoneNumber' placeholder='phone number' />
            <label></label>
            <input type="text" name='emailAddress' placeholder='email address' />
            <label></label>
            <button type='submit'>Add User</button>
        </form>
    )
}

export default CreateCard;