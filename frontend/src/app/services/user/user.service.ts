import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { map } from 'rxjs/operators';
import { MyNotifierService } from '../notifier/my-notifier.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly notifier: MyNotifierService;
  readonly URL_DB = 'http://localhost:8080/';
  private userBeh = new BehaviorSubject<User>(new User);

  constructor(private http: HttpClient) {
  }

  login(loginPayload) {
    const headers = {
      'Authorization': 'Basic ' + btoa("kmichali:$2y$12$6nzDzH9nWVbbcUYagcvdze7HRhUpTpVOLoL7Ksw8pyXml9yGJ.k1S"),
      'Content-type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': "*"
    }
    return this.http.post(this.URL_DB + 'oauth/token', loginPayload, { headers })

  }

  register(user: User) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.URL_DB + 'registration', JSON.stringify(user),
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

  updateUser(user: User) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put(this.URL_DB + 'updateUser', JSON.stringify(user),
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

  getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.URL_DB + "users");
  }
  getById(userId: string): Observable<User> {
    return this.http.get<User>(this.URL_DB + "user/" + userId);
  }
  getByPesel(userPesel: string): Observable<User> {
    return this.http.get<User>(this.URL_DB + "user?pesel=" + userPesel);
  }
  addUser(user: User) {
    this.userBeh.next(user);
  }

  getLogedUser(): Observable<User> {
    return this.userBeh.asObservable();
  }
  getLoggedUserPesel() {
    return sessionStorage.getItem('user');
  }
  setLoggedUserPesel(user: User) {
    return sessionStorage.setItem('user', JSON.stringify(user));
  }
}
