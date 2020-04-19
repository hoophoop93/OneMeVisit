import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit } from 'src/app/shared/models/visit.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  readonly URL_DB = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getVisitsByUserId(userId: number): Observable<Array<Visit>> {
    return this.http.get<Array<Visit>>(this.URL_DB + 'visits/' + userId)
  }
  addVisit(visit: Visit) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.URL_DB + 'addVisit', JSON.stringify(visit),
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

  updateVisit(visit: Visit) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(this.URL_DB + 'updateVisit', JSON.stringify(visit),
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


  deleteVisist(visitId: number) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.delete(this.URL_DB + 'deleteVisit/' + visitId,
      {
        headers: httpHeaders,
        observe: 'response',
        responseType: 'text'
      }).pipe(
        map((data: any) => {
          return data;
        })
      );
  }

}
