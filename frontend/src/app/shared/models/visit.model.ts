import { Doctor } from './doctor.model';
import { User } from './user.model';

export class Visit {

    id: number;

    visitDate: string;

    visitHour: string;

    registrationDate: string;

    userDTO: User;
    
    doctorDTO: Doctor;
}