export type TUser = {
    photo: string;
    name: string;
    surname: string;
    fullName?: string;
    phoneNumber: number;
    emailAddress: string;
    isFavorite: boolean;
    isDelete: boolean
    id: number;
}

class ContactCard {
    static index = 0;

    photo: string;
    name: string;
    surname: string;
    fullName?: string;
    phoneNumber: number;
    emailAddress: string;
    isFavorite: boolean;
    isDelete: boolean;
    id: number;

    constructor(userInfo: TUser) {
        this.photo = userInfo.photo;
        this.name = userInfo.name;
        this.surname = userInfo.surname;
        this.fullName = `${userInfo.name}_${userInfo.surname}`;
        this.phoneNumber = userInfo.phoneNumber;
        this.emailAddress = userInfo.emailAddress;
        this.isFavorite = userInfo.isFavorite;
        this.isDelete = userInfo.isDelete;
        this.id = userInfo.id;
    }
}

export default ContactCard;