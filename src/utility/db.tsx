import { TUser } from 'model/model-card';
import axios from 'axios';

const DB_OPERATIONS = {
    saveUserToDB,
    deleteUserFromDB,
    modifieUserForDB,
    loadUsersList,
    isFavoriteUser,
}

const URL = 'http://localhost:4000/contacts';

async function saveUserToDB(user: TUser) {
    await axios.post(URL, user);
}
async function deleteUserFromDB(user: TUser) {
    await axios.delete(`${URL}/${user.id}`);
}
async function modifieUserForDB(user: TUser) {
    await axios.delete(`${URL}/${user.id}`);
    await axios.post(URL, user);
}
async function loadUsersList(ctxValues: any) {
    const res = await axios.get(URL);
    await ctxValues.updateUserList.setLoadUsersList(res.data);
}
async function isFavoriteUser(user: TUser) {
    await axios.put(`${URL}/${user.id}`, { ...user, isFavorite: !user.isFavorite })
}

export default DB_OPERATIONS;