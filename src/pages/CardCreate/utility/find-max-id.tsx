import { TUser } from "model/model-card";

function findMaxId(usersList: TUser[]): number {
    const maxId = usersList.sort((a, b) => {
        return b.id - a.id;
    });

    return maxId[0].id + 1;
}

export default findMaxId;