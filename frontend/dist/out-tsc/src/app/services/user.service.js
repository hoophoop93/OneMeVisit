import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.URL_DB = '//localhost:8080/';
    }
    login(loginPayload) {
        const headers = {
            'Authorization': 'Basic' + btoa("username:password"),
            'Content-type': 'application/x-www-form-urlencoded'
        };
        return this.http.post(this.URL_DB + 'oauth/token', loginPayload, { headers });
    }
    register(user) {
        return this.http.post(this.URL_DB + 'registration', user);
    }
    getAll() {
        return this.http.get(this.URL_DB + "users");
    }
    getById(userId) {
        return this.http.get(this.URL_DB + "user/" + userId);
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map