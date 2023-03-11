import React, { useState } from 'react';
import { TUser } from 'model/model-card';
import TCtxValues from 'model/model-store-context';
import { addUser, removeUser, changeUserInfo } from 'store/utility/ctx-functions'

const ctxValues: TCtxValues = {
    values: {
        userForModifie: {} as TUser,
        usersList: [],
        searchBarValue: '',
        numOfCreatedCards: 0,
    },
    updateUserList: {
        addUser: () => { },
        removeUser: () => { },
        changeUserInfo: () => { },
    },
    misc: {
        getSearchBarValue: () => { },
        setNumOfCreatedCards: () => { },
        getUserForModifie: () => { },
    },
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxValuesProvider(props: { children: any }) {

    const [userForModifie, setUserForModifie] = useState<TUser>({} as TUser);
    const [usersList, setUsersList] = useState<TUser[]>([]);
    const [searchBarValue, setSearchBarValue] = useState('');
    const [numOfCreatedCards, setNumOfCreatedCards] = useState(0);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    userForModifie,
                    usersList,
                    searchBarValue,
                    numOfCreatedCards,
                },
                updateUserList: {
                    addUser: addUser(setUsersList),
                    removeUser: removeUser(usersList, setUsersList),
                    changeUserInfo: changeUserInfo(usersList, setUsersList),
                },
                misc: {
                    getSearchBarValue: (str: string) => setSearchBarValue(() => str),
                    setNumOfCreatedCards: () => setNumOfCreatedCards(() => numOfCreatedCards + 1),
                    getUserForModifie: (user: TUser) => setUserForModifie(() => user),
                },
            }}
            >
                {props.children}
            </ctxStoreValues.Provider>
        </>
    )
}

export default ctxStoreValues;