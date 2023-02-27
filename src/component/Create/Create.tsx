import React, { ChangeEvent, useState } from 'react'
import { TUser } from '../../model/card';
import './Create.scss';

function Create() {

    const [newUser, setNewUser] = useState<TUser>({
        photo: '',
        name: '',
        surname: '',
        phoneNumber: 0,
        emailAddress: '',
        id: 0,
    });

    function submitHandler(event: any) {
        event.preventDefault();
        setNewUser(() => {
            return {
                photo: '',
                name: event.target['firstName'].value,
                surname: event.target['lastName'].value,
                phoneNumber: event.target['phoneNumber'].value,
                emailAddress: event.target['emailAddress'].value,
                id: 0,
            }
        })
    }

    console.log(newUser);

    return (
        <form onSubmit={submitHandler} className='create-card'>
            <img src="" alt="" />
            <input type="text" name='firstName' placeholder='first name' />
            <input type="text" name='lastName' placeholder='last name' />
            <input type="text" name='phoneNumber' placeholder='phone number' />
            <input type="text" name='emailAddress' placeholder='email address' />
            <button type='submit'>Add User</button>
        </form>
    )
}

export default Create;