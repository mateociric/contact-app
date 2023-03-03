import { TUser } from "model/card";

type TCtxValues = {
    listUsers: TUser[],
    updateUsersList: Function,
    updateIsFavUsersList: Function,
}

export default TCtxValues;