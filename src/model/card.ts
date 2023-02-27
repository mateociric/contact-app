export type TUser = {
    photo: string;
    name: string;
    surname: string;
    phoneNumber: number;
    emailAddress: string;
    id: number;
}

class ContactCard {
    photo: string;
    name: string;
    surname: string;
    phoneNumber: number;
    emailAddress: string;
    id: number;

    constructor(photo: string, name: string, surname: string, phoneNumber: number, emailAddress: string, id: number) {
        this.photo = photo;
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.id = id;
    }
}

export default ContactCard;