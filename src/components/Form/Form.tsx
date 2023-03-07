import React from 'react'
import 'components/Form/Form.scss';
import { TUser } from 'model/model-card';

function Form(props: { onSubmit: React.FormEventHandler, buttonText: string, userInfo?: TUser }) {

    return (
        <form onSubmit={props.onSubmit} className='form'>
            <img src="" alt="" />
            <input type="text" name='firstName' placeholder='first name' defaultValue={props.userInfo?.name} />
            <label></label>
            <input type="text" name='lastName' placeholder='last name' defaultValue={props.userInfo?.surname} />
            <label></label>
            <input type="text" name='phoneNumber' placeholder='phone number' defaultValue={props.userInfo?.phoneNumber} />
            <label></label>
            <input type="text" name='emailAddress' placeholder='email address' defaultValue={props.userInfo?.emailAddress} />
            <label></label>
            <button type='submit'>{props.buttonText}</button>
        </form>
    )
}

export default Form;