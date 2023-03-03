import React, { useState } from 'react';
import { TUser } from 'model/card';
import TCtxValues from 'model/ctx-values';

const ctxValues: TCtxValues = {
    listUsers: [],
    updateUsersList: () => { },
    updateIsFavUsersList: () => { }
}
const ctxStoreValues = React.createContext(ctxValues);

export function CtxValuesProvider(props: { children: any }) {
    const [listUsers, setListUsers] = useState<TUser[]>([]);

    function updateUsersList(user: TUser) {
        setListUsers((currState) => {
            return [...currState, user];
        });
    }
    function updateIsFavUsersList(user: TUser) {
        const newListUsers = listUsers.map((el, index) => {
            if (index === user.id) {
                el = user;
            }
            return el;
        });
        setListUsers(newListUsers);
    }

    return (
        <>
            <ctxStoreValues.Provider value={{ listUsers: listUsers, updateUsersList: updateUsersList, updateIsFavUsersList: updateIsFavUsersList }}>
                {props.children}
            </ctxStoreValues.Provider>
        </>
    )
}

export default ctxStoreValues;