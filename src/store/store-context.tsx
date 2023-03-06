import React, { useState } from 'react';
import { TUser } from 'model/model-card';
import TCtxValues from 'model/model-store-context';

const ctxValues: TCtxValues = {
    usersList: [],
    addNewUser: () => { },
    removeUser: () => { },
    updateUserList: () => { },
    searchBarValue: '',
    getSearchBarValue: () => { }
}
const ctxStoreValues = React.createContext(ctxValues);

export function CtxValuesProvider(props: { children: any }) {

    const [usersList, setUsersList] = useState<TUser[]>([]);
    const [searchBar, setSearchBar] = useState('');

    function addNewUser(user: TUser) {
        setUsersList((prevState) => {
            return [...prevState, user];
        });
    }

    function removeUser(id: number) {
        const modifiedArr = usersList.filter(el => {
            return el.id !== id;
        });
        setUsersList(() => modifiedArr);
    }

    function updateUserList(id: number, isFavorite: boolean) {
        const modifiedArr = usersList.map(el => {
            if (el.id === id) {
                el.isFavorite = isFavorite
            }
            return el
        });
        setUsersList(() => modifiedArr);
    }

    function getSearchBarValue(str: string) {
        setSearchBar(str);
    }

    return (
        <>
            <ctxStoreValues.Provider value={{
                usersList: usersList,
                addNewUser: addNewUser,
                removeUser: removeUser,
                updateUserList: updateUserList,
                searchBarValue: searchBar,
                getSearchBarValue
            }}>
                {props.children}
            </ctxStoreValues.Provider>
        </>
    )
}

export default ctxStoreValues;