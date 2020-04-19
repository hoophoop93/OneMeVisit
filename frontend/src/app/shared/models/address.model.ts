import { User } from './user.model';

export class Address {
    id: number;

    city: string;

    postalCode: string;

    street: string;  

    userDTO: User;
}