import React, { useState } from 'react';
import { TUser } from 'model/model-card';
import TCtxValues from 'model/model-store-context';
import { addUser, removeUser, changeUserInfo } from 'store/utility/ctx-functions'

const ctxValues: TCtxValues = {
    values: {
        userForModifie: {} as TUser,
        usersList: [],
        searchBarValue: '',
        isAppRunFirstTime: false,
    },
    updateUserList: {
        addUser: () => { },
        removeUser: () => { },
        changeUserInfo: () => { },
        setLoadUsersList: () => { },
    },
    misc: {
        getSearchBarValue: () => { },
        getUserForModifie: () => { },
    },
}

const ctxStoreValues = React.createContext(ctxValues);

export function CtxValuesProvider(props: { children: React.ReactNode }) {
    const [userForModifie, setUserForModifie] = useState<TUser>({} as TUser);
    const [usersList, setUsersList] = useState<TUser[]>([]);
    const [searchBarValue, setSearchBarValue] = useState('');
    const [isAppRunFirstTime, setIsAppRunFirstTime] = useState(false);

    return (
        <>
            <ctxStoreValues.Provider value={{
                values: {
                    userForModifie,
                    usersList,
                    searchBarValue,
                    isAppRunFirstTime,
                },
                updateUserList: {
                    addUser: addUser(setUsersList),
                    removeUser: removeUser(usersList, setUsersList),
                    changeUserInfo: changeUserInfo(usersList, setUsersList),
                    setLoadUsersList: (savedUsersListForFetching: TUser[]) => {
                        setUsersList(() => savedUsersListForFetching);
                        //set isAppRunFirstTime to true when the dada is fetched
                        setIsAppRunFirstTime(() => true);
                    },
                },
                misc: {
                    getSearchBarValue: (str: string) => setSearchBarValue(() => str),
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