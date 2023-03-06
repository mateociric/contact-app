export type TUser = {
    photo: string;
    name: string;
    surname: string;
    phoneNumber: number;
    emailAddress: string;
    isFavorite: boolean;
    isDeleted: boolean
    id: number;
}

class ContactCard {
    static index = 0;

    photo: string;
    name: string;
    surname: string;
    phoneNumber: number;
    emailAddress: string;
    isFavorite: boolean;
    isDeleted: boolean;
    id: number;

    constructor(userInfo: TUser) {
        this.photo = userInfo.photo;
        this.name = userInfo.name;
        this.surname = userInfo.surname;
        this.phoneNumber = userInfo.phoneNumber;
        this.emailAddress = userInfo.emailAddress;
        this.isFavorite = userInfo.isFavorite;
        this.isDeleted = userInfo.isDeleted;
        this.id = userInfo.id;
    }
}

export default ContactCard;