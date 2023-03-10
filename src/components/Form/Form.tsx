import React, { useContext } from 'react'
import 'components/Form/Form.scss';
import { TUser } from 'model/model-card';
import uploadPhoto from 'components/Form/utility/upload-photo';
import ctxStoreValues from 'store/store-context';
import InputForm from 'components/Form/Input/InputForm';

function Form(props: { onSubmit: React.FormEventHandler, buttonText: string, userInfo?: TUser }) {

    const ctxValues = useContext(ctxStoreValues);

    return (
        <form onSubmit={props.onSubmit} className='form flex-column-center'>

            <div className='form__photo-upload flex-row-center' >
                <input
                    onChange={uploadPhoto}
                    type="file"
                    accept='image/*'
                />
                <img src={ctxValues.values.userForModifie.photo} alt="" />
            </div>

            <InputForm
                type={'text'}
                name={'firstName'}
                placeholder={'first name'}
                defaultValue={props.userInfo?.firstName}
            />
            <InputForm
                type={'text'}
                name={'lastName'}
                placeholder={'last name'}
                defaultValue={props.userInfo?.lastName}
            />
            <InputForm
                type={'text'}
                name={'phoneNumber'}
                placeholder={'phone number'}
                defaultValue={props.userInfo?.phoneNumber}
            />
            <InputForm
                type={'text'}
                name={'emailAddress'}
                placeholder='email address'
                defaultValue={props.userInfo?.emailAddress}
            />

            <button type='submit'>{props.buttonText}</button>

        </form>
    )
}

export default Form;