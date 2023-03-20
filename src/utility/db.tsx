import { TUser } from 'model/model-card';
import TCtxValues from 'model/model-store-context';
import axios from 'axios';

const DB_OPERATIONS = {
    saveUser,
    deleteUser,
    modifieUser,
    loadUsersList,
}

const URL = 'http://localhost:4000/contacts';

async function saveUser(user: TUser) {
    await axios.post(URL, user);
}
async function deleteUser(user: TUser) {
    await axios.delete(`${URL}/${user.id}`);
}
async function modifieUser(user: TUser, typeOfModification: 'user' | 'favorite') {
    if ('user') {
        await axios.put(`${URL}/${user.id}`, user)
    }
    if ('favorite') {
        await axios.patch(`${URL}/${user.id}`, { isFavorite: !user.isFavorite })
    }
}
async function loadUsersList(ctxValues: TCtxValues) {
    const res = await axios.get(URL);
    await ctxValues.updateUserList.setLoadUsersList(res.data);
}

export default DB_OPERATIONS;