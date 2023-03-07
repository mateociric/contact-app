import { TUser } from "model/model-card";

type TCtxValues = {
    values: {
        user: TUser,
        usersList: TUser[],
        searchBarValue: string,
    }
    updateUserList: {
        addUser: Function,
        removeUser: Function,
        changeUserInfo: Function,
    }
    misc: {
        getSearchBarValue: Function,
    }
}

export default TCtxValues;