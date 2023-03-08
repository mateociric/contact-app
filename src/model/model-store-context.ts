import { TUser } from "model/model-card";

type TCtxValues = {
    values: {
        userForModifie: TUser,
        usersList: TUser[],
        searchBarValue: string,
        numOfDeletedCards: number,
    }
    updateUserList: {
        addUser: Function,
        removeUser: Function,
        changeUserInfo: Function,
    }
    misc: {
        getSearchBarValue: Function,
        setNumOfDeletedCards: Function,
        getUserForModifie: Function,
    }
}

export default TCtxValues;