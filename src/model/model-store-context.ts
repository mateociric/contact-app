import { TUser } from "model/model-card";

type TCtxValues = {
    usersList: TUser[],
    addNewUser: Function,
    updateUserList: Function,
    searchBarValue: string,
    getSearchBarValue: Function,
}

export default TCtxValues;