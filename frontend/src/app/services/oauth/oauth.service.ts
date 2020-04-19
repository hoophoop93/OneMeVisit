import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private token: Object;

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public setToken(token: Object) {
    this.token = token;
    return sessionStorage.setItem('token', token.toString());
  }

  public getAccessToken(): string {
    return this.token['access_token'];
  }

  public getRefreshToken(): string {
    return this.token['refresh_token'];
  }

  public clearToken() {
    return sessionStorage.clear();
  }

}
