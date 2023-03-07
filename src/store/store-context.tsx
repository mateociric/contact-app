import React, { useState, useEffect, useCallback } from 'react';
import { TUser } from 'model/model-card';
import TCtxValues from 'model/model-store-context';
import { addUser, removeUser, changeUserInfo, getSearchBarValue } from 'store/utility/ctx-functions'

const ctxValues: TCtxValues = {
    values: {
        user: {} as TUser,
        usersList: [],
        searchBarValue: '',
    },
    updateUserList: {
        addUser: () => { },
        removeUser: () => { },
        changeUserInfo: () => { },
    },
    misc: {
        getSearchBarValue: () => { },
    },
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxValuesProvider(props: { children: any }) {

    const [user, setUser] = useState({} as TUser);
    const [usersList, setUsersList] = useState<TUser[]>([]);
    const [searchBarValue, setSearchBarValue] = useState('');

    useEffect( () => {
        // const modifiedArrForId = usersList.map((el, index) => {
        //     el.id = index;
        //     return el
        // })
        //setUsersList(modifiedArrForId);
    }, [usersList]);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    user,
                    usersList,
                    searchBarValue
                },
                updateUserList: {
                    addUser: addUser(setUsersList),
                    removeUser: removeUser(usersList, setUsersList),
                    changeUserInfo: changeUserInfo(usersList, setUsersList),
                },
                misc: {
                    getSearchBarValue: getSearchBarValue(setSearchBarValue),
                    //setNewId
                },
            }}
            >
                {props.children}
            </ctxStoreValues.Provider>
        </>
    )
}

export default ctxStoreValues;