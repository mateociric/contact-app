import { TUser } from "model/model-card"

function addUser(setUsersList: Function) {
    return (user: TUser) => {
        setUsersList((prevState: TUser[]) => {
            return [...prevState, user];
        });
    }
}
function removeUser(usersList: TUser[], setUsersList: Function) {
    return (user: TUser) => {
        const modifiedArr = usersList.filter(el => {
            return el.id !== user.id;
        });
        setUsersList(() => modifiedArr);
    }
}
function changeUserInfo(usersList: TUser[], setUsersList: Function) {
    return (type: 'favorite' | 'delete' | 'info', user: TUser) => {
        const modifiedArr = usersList.map(el => {
            if (type === 'favorite') {
                if (el.id === user.id) {
                    el.isFavorite = !user.isFavorite;
                }
            }
            if (type === 'delete') {
                if (el.id === user.id) {
                    el.isDelete = !user.isDelete;
                }
            }
            if (type === 'info') {
                if (el.id === user.id) {
                    el = user;
                }
            }

            return el;
        });
        setUsersList(() => modifiedArr);
    }
}

export { addUser, removeUser, changeUserInfo }
