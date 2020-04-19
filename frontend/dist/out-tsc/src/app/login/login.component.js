import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Validators } from "@angular/forms";
let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.invalidLogin = false;
    }
    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }
        const body = new HttpParams()
            .set('pesel', this.loginForm.controls.pesel.value)
            .set('password', this.loginForm.controls.password.value)
            .set('grant_type', 'password');
        this.userService.login(body.toString()).subscribe(data => {
            window.sessionStorage.setItem('token', JSON.stringify(data));
            console.log(window.sessionStorage.getItem('token'));
            this.router.navigate(['registration']);
        }, error => {
            alert(error.error.error_description);
        });
    }
    ngOnInit() {
        window.sessionStorage.removeItem('token');
        this.loginForm = this.formBuilder.group({
            pesel: ['', Validators.compose([Validators.required])],
            password: ['', Validators.required]
        });
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map