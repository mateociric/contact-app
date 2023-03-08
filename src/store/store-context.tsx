import React, { useState, useEffect, useCallback } from 'react';
import { TUser } from 'model/model-card';
import TCtxValues from 'model/model-store-context';
import { addUser, removeUser, changeUserInfo } from 'store/utility/ctx-functions'

const ctxValues: TCtxValues = {
    values: {
        userForModifie: {} as TUser,
        usersList: [],
        searchBarValue: '',
        numOfDeletedCards: 0,
    },
    updateUserList: {
        addUser: () => { },
        removeUser: () => { },
        changeUserInfo: () => { },
    },
    misc: {
        getSearchBarValue: () => { },
        setNumOfDeletedCards: () => { },
        getUserForModifie: () => { },
    },
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxValuesProvider(props: { children: any }) {

    const [userForModifie, setUserForModifie] = useState<TUser>({} as TUser);
    const [usersList, setUsersList] = useState<TUser[]>([]);
    const [searchBarValue, setSearchBarValue] = useState('');
    const [numOfDeletedCards, setNumOfDeletedCards] = useState(0);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    userForModifie,
                    usersList,
                    searchBarValue,
                    numOfDeletedCards,
                },
                updateUserList: {
                    addUser: addUser(setUsersList),
                    removeUser: removeUser(usersList, setUsersList),
                    changeUserInfo: changeUserInfo(usersList, setUsersList),
                },
                misc: {
                    getSearchBarValue: (str: string) => setSearchBarValue(() => str),
                    setNumOfDeletedCards: () => setNumOfDeletedCards(() => numOfDeletedCards + 1),
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