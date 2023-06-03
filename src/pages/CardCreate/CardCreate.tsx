import React, { useContext } from "react";
import Form from "components/Form/Form";
import { TUser } from "model/model-card";
import ctxStoreValues from "store/store-context";
import validateForm from "utility/form-validate";
import DB_OPERATIONS from "utility/db";

function CreateCard() {
  const ctxValues = useContext(ctxStoreValues);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const isEveryInputOk = validateForm(document.querySelector("form")!);
    if (isEveryInputOk) {
      const user: TUser = {
        photo: formData.get("userPhoto") as string,
        firstName: formData.get("firstName") as string,
        lastName: formData.get("lastName") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        emailAddress: formData.get("emailAddress") as string,
        isFavorite: false,
        isDelete: false,
        //avoid same id
        id: !ctxValues.values.usersList.length
          ? 1
          : ctxValues.values.usersList[ctxValues.values.usersList.length - 1]
              .id + 1,
      };
      ctxValues.updateUserList.addUser(user);
      DB_OPERATIONS.saveUser(user);
      // TODO component that renders the image should handle this without using document.getElementById
      (
        document.getElementById("userPhoto") as HTMLImageElement
      ).src = require("photo/default-photo.png");
      document.querySelector("form")!.reset();
    }
  }

  return <Form onSubmit={submitHandler} buttonText={"Add User"}></Form>;
}

export default CreateCard;
