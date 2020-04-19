import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from 'src/app/shared/models/address.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  readonly URL_DB = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  updateUserAddress(address: Address) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(this.URL_DB + 'updateAddress', JSON.stringify(address),
      {
        headers: httpHeaders,
        observe: 'response',
        responseType: 'text'
      }
    ).pipe(
      map((data: any) => {
        return data;
      })
    )
  }

  getAddressByUserId(userId: number): Observable<Address> {
    return this.http.get<Address>(this.URL_DB + "address/" + userId);
  }

}
