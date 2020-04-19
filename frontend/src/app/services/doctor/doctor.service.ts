import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/shared/models/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  readonly URL_DB = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Array<Doctor>> {
    return this.http.get<Array<Doctor>>(this.URL_DB + 'doctors');
  }

}
