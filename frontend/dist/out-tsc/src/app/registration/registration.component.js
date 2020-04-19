import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';
import { Validators } from '@angular/forms';
import { MustMatch } from '../shared/utils/passwordMatcher';
let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.user = new User();
        this.submitted = false;
    }
    ngOnInit() {
        this.validatingForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            pesel: ['', [Validators.required, Validators.minLength(11)]],
            phone: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }
    // confirmRegistration() {
    //   this.userService.register(this.user).subscribe(newUser => {
    //     this.user = newUser;
    //     console.log("user:" + this.user.email);
    //   })
    // }
    // convenience getter for easy access to form fields
    get fields() { return this.validatingForm.controls; }
    onSubmit() {
        this.submitted = true;
        //stop here if form is invalid
        if (this.validatingForm.invalid) {
            return;
        }
        alert('Success!!');
    }
    getClass(error) {
        var className = '';
        if (error) {
            className = 'invalid-feedback';
        }
        else {
            className = 'form-control is-valid';
        }
        return className;
    }
};
RegistrationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.css']
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map