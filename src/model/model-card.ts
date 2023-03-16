export type TUser = {
    photo: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    phoneNumber: string;
    emailAddress: string;
    isFavorite: boolean;
    isDelete: boolean
    id: number;
}

class ContactCard {
    static index = 0;

    photo: string;
    firstName: string;
    lastName: string;
    fullName?: string;
    phoneNumber: string;
    emailAddress: string;
    isFavorite: boolean;
    isDelete: boolean;
    id: number;

    constructor(userInfo: TUser) {
        this.photo = userInfo.photo;
        this.firstName = userInfo.firstName;
        this.lastName = userInfo.lastName;
        this.fullName = `${userInfo.firstName}_${userInfo.lastName}`;
        this.phoneNumber = userInfo.phoneNumber;
        this.emailAddress = userInfo.emailAddress;
        this.isFavorite = userInfo.isFavorite;
        this.isDelete = userInfo.isDelete;
        this.id = userInfo.id;
    }
}

export default ContactCard;