import React, { useState, useContext } from 'react';
import InputForm from 'components/Form/Input/InputForm';
import 'components/Form/Form.scss';
import { TUser } from 'model/model-card';
import ctxStoreValues from 'store/store-context';
import uploadPhoto from 'components/Form/utility/upload-photo';
import defaultPhoto from 'photo/default-photo.png';

function Form(props: { onSubmit: React.FormEventHandler, buttonText: string, userInfo?: TUser, srcPhoto: string }) {
    const [uploadedPhoto, setUploadedPhoto] = useState<boolean>(false)
    const ctxValues = useContext(ctxStoreValues);
    //if photo is uploaded by util. func. uploadPhoto display it, otherwise show image based on props.srcPhoto value
    const photoToBeDisplayed = uploadedPhoto || (props.srcPhoto === 'defaultPhoto' ? defaultPhoto : ctxValues.values.userForModifie.photo);

    return (
        <form onSubmit={props.onSubmit} className='form flex-column-center'>
            <div className='form__photo-upload flex-row-center' >
                <input
                    onChange={(event: any) => uploadPhoto(event, setUploadedPhoto)}
                    type="file"
                    accept='image/*'
                    className='form__photo-upload__input'
                />
                <img src={photoToBeDisplayed} alt="" className={'form__photo-upload__img fa-icon-center'} />
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
        </form >
    )
}

export default Form;