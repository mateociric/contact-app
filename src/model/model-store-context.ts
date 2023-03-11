import { TUser } from "model/model-card";

type TCtxValues = {
    values: {
        userForModifie: TUser,
        usersList: TUser[],
        searchBarValue: string,
        numOfCreatedCards: number,
    }
    updateUserList: {
        addUser: Function,
        removeUser: Function,
        changeUserInfo: Function,
    }
    misc: {
        getSearchBarValue: Function,
        setNumOfCreatedCards: Function,
        getUserForModifie: Function,
    }
}

export default TCtxValues;