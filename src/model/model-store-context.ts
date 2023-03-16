import { TUser } from "model/model-card";

type TCtxValues = {
    values: {
        userForModifie: TUser,
        usersList: TUser[],
        searchBarValue: string,
        isAppRunFirstTime: boolean,
    }
    updateUserList: {
        addUser: Function,
        removeUser: Function,
        changeUserInfo: Function,
        setLoadUsersList: Function,
    }
    misc: {
        getSearchBarValue: Function,
        getUserForModifie: Function,
    }
}

export default TCtxValues;