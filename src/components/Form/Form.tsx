import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import InputForm from "components/Form/Input/InputForm";
import "components/Form/Form.scss";
import { TUser } from "model/model-card";
import ctxStoreValues from "store/store-context";
import uploadPhoto from "components/Form/utility/upload-photo";
import defaultImageSrc from "../../photo/default-photo.png";

// TODO send image src through props
function Form(props: {
  onSubmit: React.FormEventHandler;
  buttonText: string;
  userInfo?: TUser;
}) {
  const ctxValues = useContext(ctxStoreValues);
  const currLocation = useLocation();

  return (
    <form onSubmit={props.onSubmit} className="form flex-column-center">
      <div className="form__photo-upload flex-row-center">
        <input
          onChange={uploadPhoto}
          type="file"
          accept="image/*"
          className="form__photo-upload__input"
        />
        <img
          src={
            currLocation.pathname === "/CardCreate"
              ? defaultImageSrc
              : ctxValues.values.userForModifie.photo
          }
          alt=""
          id="userPhoto"
          className="form__photo-upload__img fa-icon-center"
        />
      </div>

      <InputForm
        type={"text"}
        id={"firstName"}
        placeholder={"first name"}
        defaultValue={props.userInfo?.firstName}
      />
      <InputForm
        type={"text"}
        id={"lastName"}
        placeholder={"last name"}
        defaultValue={props.userInfo?.lastName}
      />
      <InputForm
        type={"text"}
        id={"phoneNumber"}
        placeholder={"phone number"}
        defaultValue={props.userInfo?.phoneNumber}
      />
      <InputForm
        type={"text"}
        id={"emailAddress"}
        placeholder="email address"
        defaultValue={props.userInfo?.emailAddress}
      />

      <button type="submit">{props.buttonText}</button>
    </form>
  );
}

export default Form;
