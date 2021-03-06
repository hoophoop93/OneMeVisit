(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-visit/add-visit.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-visit/add-visit.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\r\n<div #childModal class=\"modal fade bd-example-modal-lg\" id=\"addVisit\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-xl\">\r\n        <div class=\"modal-content\">\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                    Add Appointment\r\n                </h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                </button>\r\n            </div>\r\n\r\n            <!-- Modal Body -->\r\n            <div class=\"modal-body\">\r\n\r\n                <div class=\"form\" id=\"myform\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col\">\r\n                            <label class=\"font-weight-bold\" for=\"exampleInputPassword1\">Choose a Docotr</label>\r\n                            <div class=\"input-group mb-3\">\r\n                                <select class=\"custom-select\" id=\"inputGroupSelect02\" [(ngModel)]=\"visit.doctorDTO\">\r\n                                    <option class=\"dropdown-item\" selected value=\"undefined\">Select an Option</option>\r\n                                    <!-- <option class=\"dropdown-item\" disabled selected value=\"undefined\">Select an Option</option> -->\r\n                                    <option *ngFor=\"let doctor of doctors\" [ngValue]=\"doctor\"> {{doctor.name}}\r\n                                        {{doctor.surname}} - {{doctor.specialization}} </option>\r\n                                </select>\r\n                                <div class=\"input-group-append\">\r\n                                    <label class=\"input-group-text\" for=\"inputGroupSelect02\">Options</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <label class=\"font-weight-bold\" for=\"exampleInputPassword1\">Appointment date</label>\r\n                            <div>\r\n                                <mat-form-field>\r\n                                    <mat-label>Choose a Date</mat-label>\r\n                                    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"visitDate\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker></mat-datepicker>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"font-weight-bold\" for=\"exampleInputPassword1\">Choose an hour</label>\r\n                                <div class=\"input-group mb-3\">\r\n                                    <select class=\"custom-select\" id=\"inputGroupSelect02\" [(ngModel)]=\"visit.visitHour\">\r\n                                        <option class=\"dropdown-item\" selected value=\"undefined\">Select an Option\r\n                                        </option>\r\n                                        <option *ngFor=\"let hour of visitHour\" [value]=\"hour.hour\"> {{hour.hour}}\r\n                                        </option>\r\n                                    </select>\r\n                                    <div class=\"input-group-append\">\r\n                                        <label class=\"input-group-text\" for=\"inputGroupSelect02\">Options</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- Modal Footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n                    Close\r\n                </button>\r\n                <button type=\"submit\" form=\"myform\" class=\"btn btn-primary\" (click)=\"addVisitButton()\"\r\n                    data-dismiss=\"modal\">\r\n                    Save changes\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">OneMiVisit</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item active\" *ngFor=\"let link of links\">\r\n        <div>\r\n          <a [attr.data-toggle]=\"link.path === 'addVisit' ? 'modal': null\"\r\n            [attr.data-target]=\"link.path === 'addVisit' ? '#addVisit': null\" class=\"nav-link\"\r\n            [routerLink]=\"link.path\">{{ link.text }}</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\" *ngIf=\"isLoggedIn\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <i class=\"fas fa-user\"></i> {{user.name}} </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right dropdown-info\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n          <a class=\"dropdown-item text-dark\" routerLink=\"myAccount\">My account</a>\r\n          <a class=\"dropdown-item text-dark\" routerLink=\"login\" (click)=\"logout()\">Log out</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<notifier-container></notifier-container>\r\n<div class=\"container\">\r\n  <div *ngIf=\"visitsForUser.length >0; then visitList else noVisit\"></div>\r\n\r\n  <ng-template #noVisit>\r\n    <h3 class=\"text-center\">No appointments - Add your firs appointment.</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #visitList>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">No.</th>\r\n          <th scope=\"col\">Appointment Date</th>\r\n          <th scope=\"col\">Appointment Hour</th>\r\n          <th scope=\"col\">Doctor</th>\r\n          <th scope=\"col\">Action</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let visit of visitsForUser ; let i = index\">\r\n          <td> {{ i + 1}} </td>\r\n          <td> {{visit.visitDate | date}} </td>\r\n          <td> {{visit.visitHour}} </td>\r\n          <td> {{visit.doctorDTO.name}} {{visit.doctorDTO.surname}} </td>\r\n          <td>\r\n            <!-- <img src=\"assets/img/myimage.png\"> -->\r\n            <button id=\"buttonMargin\" class=\"btn btn-warning\" (click)=\"visitDetails.openVisitDetails(visit)\"\r\n              data-toggle=\"modal\" data-target=\"#visitDetails\">More</button>\r\n            <button id=\"buttonMargin\" class=\"btn btn-warning\" (click)=\"updateVisit.updateVisit(visit)\"\r\n              data-toggle=\"modal\" data-target=\"#updateVisit\">Update</button>\r\n            <button class=\"btn btn-danger\" (click)=\"deleteVisitClick(visit.id)\">Delete</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </ng-template>\r\n\r\n</div>\r\n\r\n<app-visit-details #visitDetails></app-visit-details>\r\n<app-add-visit #addVisit></app-add-visit>\r\n<app-update-visit #updateVisit></app-update-visit>\r\n<app-common-modal id=\"confirm-modal\">\r\n  <h1>Confirm!</h1>\r\n  <p>Are you sure want to delete?</p>\r\n  <button class=\"btn btn-danger buttonProp\" (click)=\"closeModal($event)\" id=\"yes\">Yes</button>\r\n  <button class=\"btn btn-warning\" (click)=\"closeModal($event)\" id=\"cancel\">Cancel</button>\r\n</app-common-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<notifier-container></notifier-container>\r\n<div class=\"login-form\">\r\n    <form [formGroup]=\"validateForm\" (ngSubmit)=\"onSubmit()\">\r\n        <h2 class=\"text-center\">Sign in</h2>\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" formControlName=\"pesel\" maxlength=\"11\" class=\"form-control\" id=\"pesel\"\r\n                placeholder=\"Pesel\" required=\"required\"\r\n                [ngClass]=\"getClass((submitted && fields.pesel.errors),fields.pesel)\">\r\n            <div *ngIf=\"submitted && fields.pesel.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"fields.pesel.errors.required\">Pesel number is required</div>\r\n                <div *ngIf=\"fields.pesel.errors.minlength\">Pesel must have a 11 digitals</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\"\r\n                required=\"required\" [ngClass]=\"getClass((submitted && fields.password.errors),fields.password)\">\r\n            <div *ngIf=\"submitted && fields.password.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"fields.password.errors.required\">Password is required</div>\r\n            </div>\r\n            <div *ngIf=\"oauthError != null\" class=\"text-danger text-center font-weight-bold\"> {{oauthError}} </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-warning\">Sign in</button>\r\n        </div>\r\n        <div class=\"clearfix\">\r\n            <a href=\"#\" class=\"pull-right\">Forgot Password?</a>\r\n        </div>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<notifier-container></notifier-container>\r\n\r\n<br />\r\n<h3 class=\"text-center\">Create your account</h3>\r\n<br />\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n    <form [formGroup]=\"validateForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label for=\"name\">Name</label>\r\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"Enter name\"\r\n                    [(ngModel)]=\"user.name\" [ngClass]=\"getClass((submitted && fields.name.errors),fields.name)\">\r\n                <div *ngIf=\"submitted && fields.name.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"fields.name.errors.required\">First Name is required</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <label for=\"surname\">Surname</label>\r\n                <input type=\"text\" formControlName=\"surname\" class=\"form-control\" placeholder=\"Enter surname\"\r\n                    [(ngModel)]=\"user.surname\"\r\n                    [ngClass]=\"getClass((submitted && fields.surname.errors),fields.surname)\">\r\n                <div *ngIf=\"submitted && fields.surname.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"fields.surname.errors.required\">Last Name is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label for=\"pesel\">Pesel Number</label>\r\n                <input type=\"text\" maxlength=\"11\" [pattern]=\"peselPattern\" formControlName=\"pesel\" class=\"form-control\"\r\n                    placeholder=\"Enter pesel number\" [(ngModel)]=\"user.pesel\"\r\n                    [ngClass]=\"getClass((submitted && fields.pesel.errors), fields.pesel)\">\r\n                <div *ngIf=\"fields.pesel.errors?.serverError\" class=\"invalid-feedback\"> {{error}} </div>\r\n                <div *ngIf=\"submitted && fields.pesel.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"fields.pesel.errors.required\">Pesel number is required</div>\r\n                    <div *ngIf=\"fields.pesel.errors.minlength\">Pesel must have a 11 digitals</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <label for=\"phone\">Phone number</label>\r\n                <input type=\"text\" formControlName=\"phone\" class=\"form-control\" placeholder=\"Enter phone number\"\r\n                    [(ngModel)]=\"user.phoneNumber\"\r\n                    [ngClass]=\"getClass((submitted && fields.phone.errors),fields.phone)\">\r\n                <div *ngIf=\"submitted && fields.phone.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"fields.phone.errors.required\">Phone number is required</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">Email address</label>\r\n            <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter email\"\r\n                [(ngModel)]=\"user.email\" [ngClass]=\"getClass((submitted && fields.email.errors),fields.email)\">\r\n            <div *ngIf=\"submitted && fields.email.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"fields.email.errors.required\">Email is required</div>\r\n                <div *ngIf=\"fields.email.errors.email\">Email must be a valid email address</div>\r\n            </div>\r\n            <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                [(ngModel)]=\"user.password\" [ngClass]=\"getClass((submitted && fields.password.errors),fields.password)\">\r\n            <div *ngIf=\"submitted && fields.password.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"fields.password.errors.required\">Password is required</div>\r\n                <div *ngIf=\"fields.password.errors.minlength\">Password must be at least 6 characters</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"confirmPassword\">Confirm Password</label>\r\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" placeholder=\"Password\"\r\n                [(ngModel)]=\"confirmPass\"\r\n                [ngClass]=\"getClass((submitted && fields.confirmPassword.errors),fields.confirmPassword)\">\r\n            <div *ngIf=\"submitted && fields.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"fields.confirmPassword.errors.required\">Password is required</div>\r\n                <div *ngIf=\"fields.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-warning\">Register</button>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-visit/update-visit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-visit/update-visit.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\r\n<div class=\"modal fade bd-example-modal-lg\" id=\"updateVisit\" tabindex=\"-1\" role=\"dialog\"\r\n    aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-xl\">\r\n        <div class=\"modal-content\">\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                    Modify Appointment\r\n                </h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                </button>\r\n            </div>\r\n\r\n            <!-- Modal Body -->\r\n            <div class=\"modal-body\">\r\n                <div class=\"form\" id=\"myform\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col\">\r\n                            <label class=\"font-weight-bold\" for=\"exampleInputPassword1\">Change doctor</label>\r\n                            <form [formGroup]=\"form\" class=\"input-group mb-3\">\r\n                                <select class=\"custom-select\" id=\"doctorOption\" [compareWith]=\"compareFn\"\r\n                                    formControlName=\"doctor\">\r\n                                    <option *ngFor=\"let doctor of doctors\" [ngValue]=\"doctor\"\r\n                                        [ngClass]=\"(doctor.id === actualDoctorId) ? 'greenText':'null'\">\r\n                                        {{doctor?.name}} {{doctor?.surname}} - {{doctor?.specialization}} </option>\r\n                                </select>\r\n                                <div class=\"input-group-append\">\r\n                                    <label class=\"input-group-text\" for=\"doctorOption\">Options</label>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <label class=\"font-weight-bold\" for=\"exampleInputPassword1\">Change appointment date</label>\r\n                            <div>\r\n                                <mat-form-field>\r\n                                    <mat-label>Choose a Date</mat-label>\r\n                                    <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"visitDate\">\r\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                    <mat-datepicker #picker [startAt]=\"visitDate\"></mat-datepicker>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"font-weight-bold\" for=\"exampleInputPassword1\">Change appointment\r\n                                    hour</label>\r\n                                <div class=\"input-group mb-3\">\r\n                                    <select class=\"custom-select\" id=\"inputGroupSelect02\"\r\n                                        [(ngModel)]=\"visitObj.visitHour\">\r\n                                        <option *ngFor=\"let hour of visitHour\"\r\n                                            [selected]=\"hour.hour === visitObj.visitHour\" [value]=\"hour.hour\"\r\n                                            [ngClass]=\"(hour.hour === actualHourVisit) ? 'greenText':'null'\">\r\n                                            {{hour?.hour}} </option>\r\n                                    </select>\r\n                                    <div class=\"input-group-append\">\r\n                                        <label class=\"input-group-text\" for=\"inputGroupSelect02\">Options</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <p class=\"label\">*Actual value is marked as green color.</p>\r\n            </div>\r\n\r\n            <!-- Modal Footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"closeModal()\">\r\n                    Close\r\n                </button>\r\n                <button type=\"submit\" form=\"myform\" class=\"btn btn-primary\" (click)=\"updateVisitForm()\"\r\n                    data-dismiss=\"modal\">\r\n                    Save changes\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-account/user-account.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-account/user-account.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<notifier-container></notifier-container>\r\n<div class=\"container\">\r\n    <br />\r\n    <h3 class=\"text-center\">My account</h3>\r\n    <br />\r\n    <h5>Personal details</h5>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <form autocomplete=\"off\" [formGroup]=\"validateForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"nameInfo\">Name</label>\r\n                    <input type=\"text\" formControlName=\"nameInfo\" class=\"form-control\" placeholder=\"Enter name\"\r\n                        [(ngModel)]=\"user.name\" [ngClass]=\"{ 'is-invalid':submitted && fields.nameInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validUserFields[0].checked\">\r\n                        {{usserCoppied?.name}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.nameInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.nameInfo.errors.required\">First Name is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"surnameInfo\">Surname</label>\r\n                    <input type=\"text\" formControlName=\"surnameInfo\" class=\"form-control\" placeholder=\"Enter surname\"\r\n                        [(ngModel)]=\"user.surname\" [ngClass]=\"{ 'is-invalid':submitted && fields.surnameInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validUserFields[1].checked\">\r\n                        {{usserCoppied?.surname}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.surnameInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.surnameInfo.errors.required\">Last Name is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"peselInfo\">Pesel Number</label>\r\n                    <input type=\"text\" maxlength=\"11\" formControlName=\"peselInfo\" class=\"form-control\"\r\n                        placeholder=\"Enter pesel number\" [(ngModel)]=\"user.pesel\"\r\n                        [ngClass]=\"{ 'is-invalid':submitted && fields.peselInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validUserFields[2].checked\">\r\n                        {{usserCoppied?.pesel}}\r\n                    </div>\r\n                    <div *ngIf=\"fields.peselInfo.errors?.serverError\" class=\"invalid-feedback\"> blad </div>\r\n                    <div *ngIf=\"submitted && fields.peselInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.peselInfo.errors.required\">Pesel number is required</div>\r\n                        <div *ngIf=\"fields.peselInfo.errors.minlength\">Pesel must have a 11 digitals</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"phoneInfo\">Phone number</label>\r\n                    <input type=\"text\" formControlName=\"phoneInfo\" class=\"form-control\" placeholder=\"Enter phone number\"\r\n                        [(ngModel)]=\"user.phoneNumber\" [ngClass]=\"{ 'is-invalid':submitted && fields.phoneInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validUserFields[3].checked\">\r\n                        {{usserCoppied?.phoneNumber}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.phoneInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.phoneInfo.errors.required\">Phone number is required</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col\">\r\n                    <label for=\"emailInfo\">Email address</label>\r\n                    <input type=\"email\" formControlName=\"emailInfo\" class=\"form-control\" placeholder=\"Enter email\"\r\n                        [(ngModel)]=\"user.email\" [ngClass]=\"{ 'is-invalid':submitted && fields.emailInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validUserFields[4].checked\">\r\n                        {{usserCoppied?.email}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.emailInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.emailInfo.errors.required\">Email is required</div>\r\n                        <div *ngIf=\"fields.emailInfo.errors.email\">Email must be a valid email address</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"passwordInfo\">Password</label>\r\n                <input type=\"password\" formControlName=\"passwordInfo\" class=\"form-control\" placeholder=\"Password\"\r\n                    [(ngModel)]=\"user.password\" [ngClass]=\"{ 'is-invalid':submitted && fields.passwordInfo.errors}\"\r\n                    (input)=\"onSearchChange($event.target)\">\r\n                <div class=\"greenText\" [hidden]=\"validUserFields[5].checked\">\r\n                    {{usserCoppied?.password}}\r\n                </div>\r\n                <div *ngIf=\"submitted && fields.passwordInfo.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"fields.passwordInfo.errors.required\">Password is required</div>\r\n                    <div *ngIf=\"fields.passwordInfo.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col\">\r\n                    <label for=\"name\">Street/city</label>\r\n                    <input type=\"streetInfo\" formControlName=\"streetInfo\" class=\"form-control\" placeholder=\"Street\"\r\n                        [(ngModel)]=\"address.street\" [ngClass]=\"{ 'is-invalid':submitted && fields.streetInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validAddressFields[0].checked\">\r\n                        {{addressCopied?.street}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.streetInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.streetInfo.errors.required\">Street is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"cityInfo\">District office</label>\r\n                    <input type=\"text\" formControlName=\"cityInfo\" class=\"form-control\" placeholder=\"city\"\r\n                        [(ngModel)]=\"address.city\" [ngClass]=\"{'is-invalid':submitted && fields.cityInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validAddressFields[1].checked\">\r\n                        {{addressCopied?.city}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.cityInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.cityInfo.errors.required\">District office is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                    <label for=\"postalCodeInfo\">Postal Code</label>\r\n                    <input type=\"text\" formControlName=\"postalCodeInfo\" class=\"form-control\" placeholder=\"postalCode\"\r\n                        [(ngModel)]=\"address.postalCode\"\r\n                        [ngClass]=\"{'is-invalid':submitted && fields.postalCodeInfo.errors}\"\r\n                        (input)=\"onSearchChange($event.target)\">\r\n                    <div class=\"greenText\" [hidden]=\"validAddressFields[2].checked\">\r\n                        {{addressCopied?.postalCode}}\r\n                    </div>\r\n                    <div *ngIf=\"submitted && fields.postalCodeInfo.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"fields.postalCodeInfo.errors.required\">Postal code is required</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br />\r\n            <button type=\"submit\" class=\"btn btn-warning\" [disabled]=\"isDisabled\">Update personal details</button>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/visit-details/visit-details.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/visit-details/visit-details.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"visitDetails\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <!-- Modal Header -->\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">\r\n                    Visit details\r\n                </h4>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                </button>\r\n            </div>\r\n\r\n            <!-- Modal Body -->\r\n            <div class=\"modal-body\">\r\n                <table class=\"table table-borderless\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\">Registration date:</th>\r\n                            <td> {{visit?.registrationDate | date}} </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">Vist date:</th>\r\n                            <td> {{visit?.visitDate | date}} </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">Visit hour:</th>\r\n                            <td>{{visit?.visitHour}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">Doctor name:</th>\r\n                            <td>{{visit?.doctorDTO.name}} {{visit?.doctorDTO.surname}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">Specialization:</th>\r\n                            <td>{{visit?.doctorDTO.specialization}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"row\">Visit room:</th>\r\n                            <td>{{visit?.doctorDTO.room}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <!-- Modal Footer -->\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">\r\n                    Close\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/common-modal/common-modal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/common-modal/common-modal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-common-modal\">\r\n    <div class=\"app-common-modal-body text-center\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n</div>\r\n<div class=\"app-common-modal-background\"></div>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-account/user-account.component */ "./src/app/components/user-account/user-account.component.ts");







const routes = [
    { path: 'registration', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'addVisit', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'myAccount', component: _components_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_6__["UserAccountComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [_components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        // this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_error_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/error-interceptor/http-error.interceptor */ "./src/app/services/error-interceptor/http-error.interceptor.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");
/* harmony import */ var _services_token_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/token-interceptor/token.interceptor */ "./src/app/services/token-interceptor/token.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_directives_checked_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/directives/checked.directive */ "./src/app/shared/directives/checked.directive.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _shared_modal_common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/modal/common-modal/common-modal.component */ "./src/app/shared/modal/common-modal/common-modal.component.ts");
/* harmony import */ var _components_visit_details_visit_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/visit-details/visit-details.component */ "./src/app/components/visit-details/visit-details.component.ts");
/* harmony import */ var _components_add_visit_add_visit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-visit/add-visit.component */ "./src/app/components/add-visit/add-visit.component.ts");
/* harmony import */ var _services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/notifier/my-notifier.service */ "./src/app/services/notifier/my-notifier.service.ts");
/* harmony import */ var _components_update_visit_update_visit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/update-visit/update-visit.component */ "./src/app/components/update-visit/update-visit.component.ts");
/* harmony import */ var _components_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/user-account/user-account.component */ "./src/app/components/user-account/user-account.component.ts");






















const MaterialImport = [
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]
];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["routingComponents"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _shared_modal_common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_16__["CommonModalComponent"],
            _shared_modal_common_modal_common_modal_component__WEBPACK_IMPORTED_MODULE_16__["CommonModalComponent"],
            _components_visit_details_visit_details_component__WEBPACK_IMPORTED_MODULE_17__["VisitDetailsModalComponent"],
            _components_add_visit_add_visit_component__WEBPACK_IMPORTED_MODULE_18__["AddVisitComponent"],
            _components_update_visit_update_visit_component__WEBPACK_IMPORTED_MODULE_20__["UpdateVisitComponent"],
            _components_user_account_user_account_component__WEBPACK_IMPORTED_MODULE_21__["UserAccountComponent"],
            _shared_directives_checked_directive__WEBPACK_IMPORTED_MODULE_13__["CheckedDirective"]
        ],
        imports: [
            MaterialImport,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierModule"].withConfig({
                position: {
                    vertical: {
                        /**
                         * Defines the horizontal position on the screen
                         * {'left' | 'middle' | 'right'}
                         */
                        position: 'top',
                        distance: 60
                    }
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_error_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["HttpErrorInterceptor"],
                multi: true },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
                multi: true
            },
            _services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_19__["MyNotifierService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/add-visit/add-visit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-visit/add-visit.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body .form-horizontal .col-sm-2,\r\n.modal-body .form-horizontal .col-sm-10 {\r\n    width: 100%\r\n}\r\n\r\n.modal-body .form-horizontal .control-label {\r\n    text-align: left;\r\n}\r\n\r\n.modal-body .form-horizontal .col-sm-offset-2 {\r\n    margin-left: 15px;\r\n}\r\n\r\n::ng-deep .cdk-overlay-container{\r\n    z-index: 1200 !important;\r\n}\r\n\r\n.input-group.mb-3 {\r\n    margin-top:7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdmlzaXQvYWRkLXZpc2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC12aXNpdC9hZGQtdmlzaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IC5mb3JtLWhvcml6b250YWwgLmNvbC1zbS0yLFxyXG4ubW9kYWwtYm9keSAuZm9ybS1ob3Jpem9udGFsIC5jb2wtc20tMTAge1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1ib2R5IC5mb3JtLWhvcml6b250YWwgLmNvbC1zbS1vZmZzZXQtMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lcntcclxuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLm1iLTMge1xyXG4gICAgbWFyZ2luLXRvcDo3cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/add-visit/add-visit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-visit/add-visit.component.ts ***!
  \*************************************************************/
/*! exports provided: AddVisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVisitComponent", function() { return AddVisitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/doctor/doctor.service */ "./src/app/services/doctor/doctor.service.ts");
/* harmony import */ var src_app_shared_models_visit_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/visit.model */ "./src/app/shared/models/visit.model.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/visit/visit.service */ "./src/app/services/visit/visit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/notifier/my-notifier.service */ "./src/app/services/notifier/my-notifier.service.ts");









let AddVisitComponent = class AddVisitComponent {
    constructor(doctorService, datePipe, visitService, router, notiferService, userService) {
        this.doctorService = doctorService;
        this.datePipe = datePipe;
        this.visitService = visitService;
        this.router = router;
        this.notiferService = notiferService;
        this.userService = userService;
        this.doctors = new Array();
        this.visit = new src_app_shared_models_visit_model__WEBPACK_IMPORTED_MODULE_3__["Visit"]();
        this.visitHour = [
            { hour: "7.00" },
            { hour: "8.30" },
            { hour: "9.30" },
            { hour: "11.00" },
            { hour: "13.00" }
        ];
        this.notifier = notiferService;
        this.doctorService.getDoctors().subscribe(results => {
            results.forEach(doctor => {
                this.doctors.push(doctor);
            });
        });
    }
    ngOnInit() {
        this.userService.getLogedUser().subscribe(res => {
            this.user = res;
        });
    }
    addVisitButton() {
        this.visit.visitDate = this.datePipe.transform(this.visitDate, 'yyyy-MM-dd').toString();
        this.visit.registrationDate = this.datePipe.transform(new Date, 'yyyy-MM-dd').toString();
        this.visit.userDTO = this.user;
        console.log(this.visit.userDTO);
        this.visitService.addVisit(this.visit).subscribe(res => {
            this.router.navigate(['/home']).then(() => {
                this.notifier.showNotifer("success", res.body);
            });
        });
    }
};
AddVisitComponent.ctorParameters = () => [
    { type: src_app_services_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: src_app_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_5__["VisitService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_8__["MyNotifierService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
AddVisitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-visit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-visit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-visit/add-visit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-visit.component.css */ "./src/app/components/add-visit/add-visit.component.css")).default]
    })
], AddVisitComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .navbar-nav.ml-auto li a{\r\n    color: white;\r\n} */\r\n\r\n\r\n.dropdown-menu {\r\n    background-color: gainsboro;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7OztBQUdIO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubmF2YmFyLW5hdi5tbC1hdXRvIGxpIGF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0gKi9cclxuXHJcblxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navbar/navbar.service */ "./src/app/services/navbar/navbar.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/oauth/oauth.service */ "./src/app/services/oauth/oauth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-account/user-account.component */ "./src/app/components/user-account/user-account.component.ts");










let HeaderComponent = class HeaderComponent {
    constructor(router, navbarService, userService, oauthService) {
        this.router = router;
        this.navbarService = navbarService;
        this.userService = userService;
        this.oauthService = oauthService;
        this.isLoggedIn = false;
        this.router.config.unshift({ path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }, { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] }, { path: 'register', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] }, { path: 'myAccount', component: _user_account_user_account_component__WEBPACK_IMPORTED_MODULE_9__["UserAccountComponent"] });
    }
    ngOnInit() {
        this.links = this.navbarService.getLinks();
        this.navbarService.getLoginStatus().subscribe(status => {
            this.isLoggedIn = status;
        });
        this.userService.getLogedUser().subscribe(res => {
            console.log(res);
            this.user = res;
        });
    }
    logout() {
        this.oauthService.clearToken();
        this.navbarService.updateLoginStatus(false);
        this.router.navigate(['login']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_services_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_5__["OauthService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    margin-top: 50px;\r\n}\r\n\r\n#buttonMargin {\r\n    margin-right: 10px;\r\n  }\r\n\r\n#buttonMargin2 {\r\n    margin-right: 100px;\r\n    background-color: hotpink;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQix5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4jYnV0dG9uTWFyZ2luIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gICNidXR0b25NYXJnaW4yIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBob3RwaW5rO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visit/visit.service */ "./src/app/services/visit/visit.service.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/modal/modal.service */ "./src/app/services/modal/modal.service.ts");
/* harmony import */ var src_app_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/navbar/navbar.service */ "./src/app/services/navbar/navbar.service.ts");
/* harmony import */ var src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notifier/my-notifier.service */ "./src/app/services/notifier/my-notifier.service.ts");







let HomeComponent = class HomeComponent {
    constructor(navbarService, visitService, userService, notifierService, modalService) {
        this.navbarService = navbarService;
        this.visitService = visitService;
        this.userService = userService;
        this.notifierService = notifierService;
        this.modalService = modalService;
        this.visitsForUser = new Array();
        this.notifier = this.notifierService;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    test() {
        this.isLoggedIn = true;
    }
    ngOnInit() {
        this.isLoggedIn = false;
        this.subscription = this.userService.getLogedUser().subscribe(res => {
            this.user = res;
        });
        this.getVisit();
    }
    getVisit() {
        this.visitService.getVisitsByUserId(this.user.id).subscribe(res => {
            res.forEach(vis => {
                this.visitsForUser.push(vis);
            });
        });
    }
    deleteVisitClick(visitId) {
        this.openModal('confirm-modal');
        this.visitIdToDelte = visitId;
    }
    openModal(id) {
        this.modalService.open(id);
    }
    closeModal(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id.nodeValue;
        if (idAttr === 'yes') {
            this.deleteVisit(this.visitIdToDelte);
        }
        this.modalService.close('confirm-modal');
    }
    deleteVisit(visitId) {
        this.visitService.deleteVisist(visitId).subscribe(res => {
            this.visitsForUser = this.visitsForUser.filter(item => item.id !== visitId);
            this.notifier.showNotifer('success', res.body);
        }, (err) => {
            if (err.status === 400) {
                this.notifier.showNotifer('error', err.error);
            }
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] },
    { type: src_app_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_2__["VisitService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_6__["MyNotifierService"] },
    { type: src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\r\n    width: 340px;\r\n    margin: 50px auto;\r\n}\r\n.login-form form {\r\n    margin-bottom: 15px;\r\n    background: #f7f7f7;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    padding: 30px;\r\n}\r\n.login-form h2 {\r\n    margin: 0 0 15px;\r\n}\r\n.form-control, .btn {\r\n    min-height: 38px;\r\n    border-radius: 2px;\r\n}\r\n.btn {        \r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWZvcm0ge1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbn1cclxuLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuLmxvZ2luLWZvcm0gaDIge1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG4uZm9ybS1jb250cm9sLCAuYnRuIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLmJ0biB7ICAgICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_services_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/oauth/oauth.service */ "./src/app/services/oauth/oauth.service.ts");
/* harmony import */ var src_app_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/navbar/navbar.service */ "./src/app/services/navbar/navbar.service.ts");








let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, userService, navbarService, http, oauthService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.navbarService = navbarService;
        this.http = http;
        this.oauthService = oauthService;
        this.invalidLogin = false;
        this.submitted = false;
    }
    ngOnInit() {
        window.sessionStorage.removeItem('token');
        this.validateForm = this.formBuilder.group({
            pesel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.validateForm.invalid) {
            return;
        }
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('username', this.fields.pesel.value)
            .set('password', this.fields.password.value)
            .set('grant_type', 'password');
        this.userService.login(body.toString()).subscribe(data => {
            this.oauthService.setToken(data);
            this.http.getByPesel(this.fields.pesel.value).subscribe(res => {
                this.userService.addUser(res);
                this.loginUser();
                this.router.navigate(['home']);
            });
        }, err => {
            if (err.error.error_description = 'Bad credentials') {
                this.oauthError = 'Invalid login or password';
            }
            console.log(err.error);
        });
    }
    // convenience getter for easy access to form fields
    get fields() { return this.validateForm.controls; }
    getClass(errorState, controlName) {
        var className = '';
        if (controlName.value != null && !errorState && controlName.value.length > 0) {
            className = 'form-control is-valid';
        }
        else if (errorState) {
            className = 'is-invalid';
        }
        else {
            className = 'form-control';
        }
        return className;
    }
    loginUser() {
        this.navbarService.updateNavAfterAuth('user');
        this.navbarService.updateLoginStatus(true);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_6__["OauthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notifier/my-notifier.service */ "./src/app/services/notifier/my-notifier.service.ts");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_shared_utils_passwordMatcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/passwordMatcher */ "./src/app/shared/utils/passwordMatcher.ts");








let RegistrationComponent = class RegistrationComponent {
    constructor(formBuilder, userService, router, notiferService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.notiferService = notiferService;
        this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.submitted = false;
        this.peselPattern = '\\d+';
        this.notifier = notiferService;
    }
    ngOnInit() {
        this.validateForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            pesel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        }, {
            validator: Object(src_app_shared_utils_passwordMatcher__WEBPACK_IMPORTED_MODULE_7__["MustMatch"])('password', 'confirmPassword')
        });
    }
    // convenience getter for easy access to form fields
    get fields() { return this.validateForm.controls; }
    onSubmit() {
        this.submitted = true;
        //stop here if form is invalid
        if (this.validateForm.invalid) {
            return;
        }
        this.userService.register(this.user).subscribe(res => {
            console.log(res.body);
            this.router.navigate(['/login']).then(() => {
                this.notifier.showNotifer("success", res.body);
            });
        }, (err) => {
            if (err.status === 400) {
                this.error = err.error;
                this.notifier.showNotifer("error", this.error);
                // activate the error message
                this.fields.pesel.setErrors({
                    serverError: this.error
                });
            }
        });
    }
    getClass(errorState, controlName) {
        var className = '';
        if (controlName.value != null && !errorState && controlName.value.length > 0) {
            className = 'form-control is-valid';
        }
        else if (errorState) {
            className = 'is-invalid';
        }
        else {
            className = 'form-control';
        }
        return className;
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_4__["MyNotifierService"] }
];
RegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __importDefault(__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/components/update-visit/update-visit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/update-visit/update-visit.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body .form-horizontal .col-sm-2,\r\n.modal-body .form-horizontal .col-sm-10 {\r\n    width: 100%\r\n}\r\n\r\n.modal-body .form-horizontal .control-label {\r\n    text-align: left;\r\n}\r\n\r\n.modal-body .form-horizontal .col-sm-offset-2 {\r\n    margin-left: 15px;\r\n}\r\n\r\n::ng-deep .cdk-overlay-container{\r\n    z-index: 1200 !important;\r\n}\r\n\r\n.input-group.mb-3 {\r\n    margin-top:7px;\r\n}\r\n\r\n.greenText{ \r\n    color:green;\r\n    font-weight: bold;\r\n }\r\n\r\n.label {\r\n    color:green;\r\n    font-size: small;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtdmlzaXQvdXBkYXRlLXZpc2l0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0NBQ3BCOztBQUNBO0lBQ0csV0FBVztJQUNYLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXZpc2l0L3VwZGF0ZS12aXNpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkgLmZvcm0taG9yaXpvbnRhbCAuY29sLXNtLTIsXHJcbi5tb2RhbC1ib2R5IC5mb3JtLWhvcml6b250YWwgLmNvbC1zbS0xMCB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4ubW9kYWwtYm9keSAuZm9ybS1ob3Jpem9udGFsIC5jb250cm9sLWxhYmVsIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLm1vZGFsLWJvZHkgLmZvcm0taG9yaXpvbnRhbCAuY29sLXNtLW9mZnNldC0yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVye1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAubWItMyB7XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxufVxyXG5cclxuLmdyZWVuVGV4dHsgXHJcbiAgICBjb2xvcjpncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4gLmxhYmVsIHtcclxuICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/update-visit/update-visit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-visit/update-visit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateVisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateVisitComponent", function() { return UpdateVisitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_models_visit_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/visit.model */ "./src/app/shared/models/visit.model.ts");
/* harmony import */ var src_app_shared_models_doctor_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/doctor.model */ "./src/app/shared/models/doctor.model.ts");
/* harmony import */ var src_app_services_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/doctor/doctor.service */ "./src/app/services/doctor/doctor.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/visit/visit.service */ "./src/app/services/visit/visit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/notifier/my-notifier.service */ "./src/app/services/notifier/my-notifier.service.ts");










let UpdateVisitComponent = class UpdateVisitComponent {
    constructor(doctorService, datePipe, visitService, router, notiferService) {
        this.doctorService = doctorService;
        this.datePipe = datePipe;
        this.visitService = visitService;
        this.router = router;
        this.notiferService = notiferService;
        this.doctors = new Array();
        this.actualDoctor = new src_app_shared_models_doctor_model__WEBPACK_IMPORTED_MODULE_3__["Doctor"]();
        this.visitHour = [
            { hour: "7.00" },
            { hour: "8.30" },
            { hour: "9.30" },
            { hour: "11.00" },
            { hour: "13.00" }
        ];
        this.compareFn = (a, b) => a.id === b.id;
        this.notifier = this.notiferService;
    }
    ngOnInit() {
        this.visitObj = new src_app_shared_models_visit_model__WEBPACK_IMPORTED_MODULE_2__["Visit"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            doctor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
        });
    }
    updateVisit(visit) {
        if (this.doctors.length === 0) {
            this.doctorService.getDoctors().subscribe(results => {
                results.forEach(doctor => {
                    this.doctors.push(doctor);
                });
            });
        }
        this.visitObj = visit;
        this.actualDoctor = visit.doctorDTO;
        this.form.controls['doctor'].setValue(this.actualDoctor);
        this.actualDoctorId = visit.doctorDTO.id;
        this.actualHourVisit = visit.visitHour;
        this.visitDate = new Date(this.datePipe.transform(visit.visitDate, 'MM/dd/yyyy'));
    }
    updateVisitForm() {
        this.visitObj.visitDate = this.datePipe.transform(this.visitDate, 'yyyy-MM-dd').toString();
        this.visitObj.registrationDate = this.datePipe.transform(new Date, 'yyyy-MM-dd').toString();
        this.visitObj.doctorDTO = this.form.controls.doctor.value;
        this.visitService.updateVisit(this.visitObj).subscribe(res => {
            this.router.navigate(['/home']).then(() => {
                this.notifier.showNotifer("success", res.body);
            });
        });
    }
    closeModal() {
        //this.visit = new Visit();
    }
};
UpdateVisitComponent.ctorParameters = () => [
    { type: src_app_services_doctor_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
    { type: src_app_services_visit_visit_service__WEBPACK_IMPORTED_MODULE_6__["VisitService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_9__["MyNotifierService"] }
];
UpdateVisitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-visit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./update-visit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-visit/update-visit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./update-visit.component.css */ "./src/app/components/update-visit/update-visit.component.css")).default]
    })
], UpdateVisitComponent);



/***/ }),

/***/ "./src/app/components/user-account/user-account.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-account/user-account.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".greenText{ \r\n    color:green;\r\n    font-weight: bold;\r\n    margin-left: 10px;\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWFjY291bnQvdXNlci1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1hY2NvdW50L3VzZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuVGV4dHsgXHJcbiAgICBjb2xvcjpncmVlbjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/user-account/user-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-account/user-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountComponent", function() { return UserAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var src_app_shared_models_address_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/address.model */ "./src/app/shared/models/address.model.ts");
/* harmony import */ var src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/address/address.service */ "./src/app/services/address/address.service.ts");
/* harmony import */ var src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/notifier/my-notifier.service */ "./src/app/services/notifier/my-notifier.service.ts");








let UserAccountComponent = class UserAccountComponent {
    constructor(formBuilder, addressService, userService, notiferService) {
        this.formBuilder = formBuilder;
        this.addressService = addressService;
        this.userService = userService;
        this.notiferService = notiferService;
        this.user = new src_app_shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.address = new src_app_shared_models_address_model__WEBPACK_IMPORTED_MODULE_5__["Address"]();
        this.submitted = false;
        this.isDisabled = true;
        this.updateAddress = false;
        this.updateUser = false;
        this.validAddressFields = [
            { checked: true },
            { checked: true },
            { checked: true },
        ];
        this.validUserFields = [
            { checked: true },
            { checked: true },
            { checked: true },
            { checked: true },
            { checked: true },
            { checked: true },
        ];
        this.streetCounter = 0;
        this.districtCounter = 0;
        this.postalCodeCounter = 0;
        this.nameCounter = 0;
        this.surnameCounter = 0;
        this.peselCounter = 0;
        this.phoneCounter = 0;
        this.emailConuter = 0;
        this.passwordCounter = 0;
        this.notifier = notiferService;
    }
    ngOnInit() {
        this.validateForm = this.formBuilder.group({
            nameInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            surnameInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            peselInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11)]],
            phoneInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            passwordInfo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            cityInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            streetInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCodeInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.userService.getLogedUser().subscribe(res => {
            console.log(res);
            this.user = res;
            this.usserCoppied = Object.assign({}, res);
        });
        this.addressService.getAddressByUserId(this.user.id).subscribe(res => {
            if (res != null) {
                this.address = res;
                this.addressCopied = Object.assign({}, res);
            }
        });
    }
    // convenience getter for easy access to form fields
    get fields() { return this.validateForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.validateForm.invalid) {
            return;
        }
        if (this.updateUser) {
            this.userService.updateUser(this.user).subscribe(res => {
                this.notiferService.showNotifer("success", res.body);
            });
        }
        if (this.updateAddress) {
            this.address.userDTO = this.user;
            this.addressService.updateUserAddress(this.address).subscribe(res => {
                this.addressCopied = Object.assign({}, this.address);
                this.notiferService.showNotifer("success", res.body);
            });
        }
        this.validUserFields.forEach(item => {
            item.checked = true;
        });
        this.isDisabled = true;
        this.validAddressFields.forEach(item => {
            item.checked = true;
        });
        this.isDisabled = true;
    }
    onSearchChange(searchValue) {
        if (searchValue.attributes.formControlName.nodeValue === 'streetInfo') {
            this.streetCounter = this.compareValues(this.addressCopied.street, searchValue.value, this.streetCounter);
            if (this.streetCounter > 0) {
                this.validAddressFields[0] = { checked: false };
            }
            else {
                this.validAddressFields[0] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'cityInfo') {
            this.districtCounter = this.compareValues(this.addressCopied.city, searchValue.value, this.districtCounter);
            if (this.districtCounter > 0) {
                this.validAddressFields[1] = { checked: false };
            }
            else {
                this.validAddressFields[1] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'postalCodeInfo') {
            this.postalCodeCounter = this.compareValues(this.addressCopied.postalCode, searchValue.value, this.postalCodeCounter);
            if (this.postalCodeCounter > 0) {
                this.validAddressFields[2] = { checked: false };
            }
            else {
                this.validAddressFields[2] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'nameInfo') {
            this.nameCounter = this.compareValues(this.usserCoppied.name, searchValue.value, this.nameCounter);
            if (this.nameCounter > 0) {
                this.validUserFields[0] = { checked: false };
            }
            else {
                this.validUserFields[0] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'surnameInfo') {
            this.surnameCounter = this.compareValues(this.usserCoppied.surname, searchValue.value, this.surnameCounter);
            if (this.surnameCounter > 0) {
                this.validUserFields[1] = { checked: false };
            }
            else {
                this.validUserFields[1] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'peselInfo') {
            this.peselCounter = this.compareValues(this.usserCoppied.pesel, searchValue.value, this.peselCounter);
            if (this.peselCounter > 0) {
                this.validUserFields[2] = { checked: false };
            }
            else {
                this.validUserFields[2] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'phoneInfo') {
            this.phoneCounter = this.compareValues(this.usserCoppied.phoneNumber, searchValue.value, this.phoneCounter);
            if (this.phoneCounter > 0) {
                this.validUserFields[3] = { checked: false };
            }
            else {
                this.validUserFields[3] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'emailInfo') {
            this.emailConuter = this.compareValues(this.usserCoppied.email, searchValue.value, this.emailConuter);
            if (this.emailConuter > 0) {
                this.validUserFields[4] = { checked: false };
            }
            else {
                this.validUserFields[4] = { checked: true };
            }
        }
        else if (searchValue.attributes.formControlName.nodeValue === 'passwordInfo') {
            this.passwordCounter = this.compareValues(this.usserCoppied.password, searchValue.value, this.passwordCounter);
            if (this.passwordCounter > 0) {
                this.validUserFields[5] = { checked: false };
            }
            else {
                this.validUserFields[5] = { checked: true };
            }
        }
        let statusButton = true;
        for (var i = 0; i < this.validUserFields.length; i++) {
            if (this.validUserFields[i].checked === false) {
                statusButton = this.isDisabled = false;
                this.updateUser = true;
                break;
            }
            else {
                this.isDisabled = true;
            }
        }
        for (var i = 0; i < this.validAddressFields.length; i++) {
            if (this.validAddressFields[i].checked === false) {
                this.isDisabled = false;
                this.updateAddress = true;
                break;
            }
            else {
                this.isDisabled = statusButton;
            }
        }
    }
    compareValues(oryginalValue, newValue, counterForControl) {
        if (oryginalValue !== newValue) {
            if (counterForControl === 0 || counterForControl > 0) {
                return 1;
            }
        }
        else {
            if (counterForControl === 1 || counterForControl < 1) {
                return 0;
            }
        }
    }
};
UserAccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_address_address_service__WEBPACK_IMPORTED_MODULE_6__["AddressService"] },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_notifier_my_notifier_service__WEBPACK_IMPORTED_MODULE_7__["MyNotifierService"] }
];
UserAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-account',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-account/user-account.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-account.component.css */ "./src/app/components/user-account/user-account.component.css")).default]
    })
], UserAccountComponent);



/***/ }),

/***/ "./src/app/components/visit-details/visit-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/visit-details/visit-details.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body .form-horizontal .col-sm-2,\r\n.modal-body .form-horizontal .col-sm-10 {\r\n    width: 100%\r\n}\r\n\r\n.modal-body .form-horizontal .control-label {\r\n    text-align: left;\r\n}\r\n\r\n.modal-body .form-horizontal .col-sm-offset-2 {\r\n    margin-left: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aXNpdC1kZXRhaWxzL3Zpc2l0LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aXNpdC1kZXRhaWxzL3Zpc2l0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IC5mb3JtLWhvcml6b250YWwgLmNvbC1zbS0yLFxyXG4ubW9kYWwtYm9keSAuZm9ybS1ob3Jpem9udGFsIC5jb2wtc20tMTAge1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgLmZvcm0taG9yaXpvbnRhbCAuY29udHJvbC1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tb2RhbC1ib2R5IC5mb3JtLWhvcml6b250YWwgLmNvbC1zbS1vZmZzZXQtMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/visit-details/visit-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/visit-details/visit-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: VisitDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitDetailsModalComponent", function() { return VisitDetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VisitDetailsModalComponent = class VisitDetailsModalComponent {
    constructor() { }
    ngOnInit() {
    }
    openVisitDetails(visit) {
        this.visit = visit;
    }
};
VisitDetailsModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visit-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./visit-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/visit-details/visit-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./visit-details.component.css */ "./src/app/components/visit-details/visit-details.component.css")).default]
    })
], VisitDetailsModalComponent);



/***/ }),

/***/ "./src/app/services/address/address.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/address/address.service.ts ***!
  \*****************************************************/
/*! exports provided: AddressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressService", function() { return AddressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AddressService = class AddressService {
    constructor(http) {
        this.http = http;
        this.URL_DB = 'http://localhost:8080/';
    }
    updateUserAddress(address) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.URL_DB + 'updateAddress', JSON.stringify(address), {
            headers: httpHeaders,
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }));
    }
    getAddressByUserId(userId) {
        return this.http.get(this.URL_DB + "address/" + userId);
    }
};
AddressService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AddressService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AddressService);



/***/ }),

/***/ "./src/app/services/doctor/doctor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/doctor/doctor.service.ts ***!
  \***************************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let DoctorService = class DoctorService {
    constructor(http) {
        this.http = http;
        this.URL_DB = 'http://localhost:8080/';
    }
    getDoctors() {
        return this.http.get(this.URL_DB + 'doctors');
    }
};
DoctorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DoctorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DoctorService);



/***/ }),

/***/ "./src/app/services/error-interceptor/http-error.interceptor.ts":
/*!**********************************************************************!*\
  !*** ./src/app/services/error-interceptor/http-error.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let HttpErrorInterceptor = class HttpErrorInterceptor {
    constructor() { }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
    intercept(req, next) {
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ;
};
HttpErrorInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpErrorInterceptor);



/***/ }),

/***/ "./src/app/services/modal/modal.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/modal/modal.service.ts ***!
  \*************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ModalService = class ModalService {
    constructor() {
        this.modals = [];
    }
    add(modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    }
    remove(id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(x => x.id !== id);
    }
    open(id) {
        // open modal specified by id
        let modal = this.modals.filter(x => x.id === id)[0];
        modal.open();
    }
    close(id) {
        // close modal specified by id
        let modal = this.modals.filter(x => x.id === id)[0];
        modal.close();
    }
};
ModalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModalService);



/***/ }),

/***/ "./src/app/services/navbar/navbar.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/navbar/navbar.service.ts ***!
  \***************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let NavbarService = class NavbarService {
    constructor() {
        this.links = new Array();
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.addItem({ text: 'Sign in', path: 'login' });
        this.addItem({ text: 'Create an Account', path: 'registration' });
        //this.isLoggedIn.next(false);
    }
    getLinks() {
        return this.links;
    }
    getLoginStatus() {
        return this.isLoggedIn;
    }
    addItem({ text, path }) {
        this.links.push({ text: text, path: path });
    }
    updateLoginStatus(status) {
        this.isLoggedIn.next(status);
        if (!status) {
            this.clearAllItems();
            this.addItem({ text: 'Sign in', path: 'login' });
            this.addItem({ text: 'Create an Account', path: 'registration' });
        }
    }
    updateNavAfterAuth(role) {
        this.removeItem({ text: 'Sign in' });
        this.removeItem({ text: 'Create an Account' });
        if (role === 'user') {
            this.addItem({ text: 'Add Appointment', path: 'addVisit' });
            this.addItem({ text: 'Visits', path: 'home' });
        }
    }
    removeItem({ text }) {
        this.links.forEach((link, index) => {
            if (link.text === text) {
                this.links.splice(index, 1);
            }
        });
    }
    clearAllItems() {
        this.links.length = 0;
    }
};
NavbarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NavbarService);



/***/ }),

/***/ "./src/app/services/notifier/my-notifier.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/notifier/my-notifier.service.ts ***!
  \**********************************************************/
/*! exports provided: MyNotifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNotifierService", function() { return MyNotifierService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm2015/angular-notifier.js");



let MyNotifierService = class MyNotifierService {
    /**
     * Constructor
     *
     * @param {NotifierService} notifier Notifier service
     */
    constructor(notifier) {
        this.notifier = notifier;
    }
    configuration() {
    }
    showNotifer(type, message) {
        this.showNotification(type, message);
    }
    /**
     * Show a notification
     *
     * @param {string} type    Notification type
     * @param {string} message Notification message
     */
    showNotification(type, message) {
        this.notifier.notify(type, message);
    }
    /**
     * Hide oldest notification
     */
    hideOldestNotification() {
        this.notifier.hideOldest();
    }
    /**
     * Hide newest notification
     */
    hideNewestNotification() {
        this.notifier.hideNewest();
    }
    /**
     * Hide all notifications at once
     */
    hideAllNotifications() {
        this.notifier.hideAll();
    }
    /**
     * Show a specific notification (with a custom notification ID)
     *
     * @param {string} type    Notification type
     * @param {string} message Notification message
     * @param {string} id      Notification ID
     */
    showSpecificNotification(type, message, id) {
        this.notifier.show({
            id,
            message,
            type
        });
    }
    /**
     * Hide a specific notification (by a given notification ID)
     *
     * @param {string} id Notification ID
     */
    hideSpecificNotification(id) {
        this.notifier.hide(id);
    }
};
MyNotifierService.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] }
];
MyNotifierService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyNotifierService);



/***/ }),

/***/ "./src/app/services/oauth/oauth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/oauth/oauth.service.ts ***!
  \*************************************************/
/*! exports provided: OauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthService", function() { return OauthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OauthService = class OauthService {
    getToken() {
        return sessionStorage.getItem('token');
    }
    setToken(token) {
        this.token = token;
        return sessionStorage.setItem('token', token.toString());
    }
    getAccessToken() {
        return this.token['access_token'];
    }
    getRefreshToken() {
        return this.token['refresh_token'];
    }
    clearToken() {
        return sessionStorage.clear();
    }
};
OauthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OauthService);



/***/ }),

/***/ "./src/app/services/token-interceptor/token.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/token-interceptor/token.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/oauth/oauth.service */ "./src/app/services/oauth/oauth.service.ts");



let TokenInterceptor = class TokenInterceptor {
    constructor(oauth) {
        this.oauth = oauth;
    }
    intercept(request, next) {
        if (this.oauth.getToken() != null) {
            let header = 'Bearer ' + this.oauth.getAccessToken();
            let headers = request.headers
                .set('Authorization', header);
            request = request.clone({ headers });
        }
        return next.handle(request);
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: src_app_services_oauth_oauth_service__WEBPACK_IMPORTED_MODULE_2__["OauthService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/user.model */ "./src/app/shared/models/user.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.URL_DB = 'http://localhost:8080/';
        this.userBeh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _shared_models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"]);
    }
    login(loginPayload) {
        const headers = {
            'Authorization': 'Basic ' + btoa("kmichali:$2y$12$6nzDzH9nWVbbcUYagcvdze7HRhUpTpVOLoL7Ksw8pyXml9yGJ.k1S"),
            'Content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': "*"
        };
        return this.http.post(this.URL_DB + 'oauth/token', loginPayload, { headers });
    }
    register(user) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.URL_DB + 'registration', JSON.stringify(user), {
            headers: httpHeaders,
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data;
        }));
    }
    updateUser(user) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.URL_DB + 'updateUser', JSON.stringify(user), {
            headers: httpHeaders,
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => {
            return data;
        }));
    }
    getAll() {
        return this.http.get(this.URL_DB + "users");
    }
    getById(userId) {
        return this.http.get(this.URL_DB + "user/" + userId);
    }
    getByPesel(userPesel) {
        return this.http.get(this.URL_DB + "user?pesel=" + userPesel);
    }
    addUser(user) {
        this.userBeh.next(user);
    }
    getLogedUser() {
        return this.userBeh.asObservable();
    }
    getLoggedUserPesel() {
        return sessionStorage.getItem('user');
    }
    setLoggedUserPesel(user) {
        return sessionStorage.setItem('user', JSON.stringify(user));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/visit/visit.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/visit/visit.service.ts ***!
  \*************************************************/
/*! exports provided: VisitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitService", function() { return VisitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let VisitService = class VisitService {
    constructor(http) {
        this.http = http;
        this.URL_DB = 'http://localhost:8080/';
    }
    getVisitsByUserId(userId) {
        return this.http.get(this.URL_DB + 'visits/' + userId);
    }
    addVisit(visit) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.post(this.URL_DB + 'addVisit', JSON.stringify(visit), {
            headers: httpHeaders,
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }));
    }
    updateVisit(visit) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.put(this.URL_DB + 'updateVisit', JSON.stringify(visit), {
            headers: httpHeaders,
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }));
    }
    deleteVisist(visitId) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
        });
        return this.http.delete(this.URL_DB + 'deleteVisit/' + visitId, {
            headers: httpHeaders,
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            return data;
        }));
    }
};
VisitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VisitService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VisitService);



/***/ }),

/***/ "./src/app/shared/directives/checked.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/checked.directive.ts ***!
  \********************************************************/
/*! exports provided: CheckedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedDirective", function() { return CheckedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CheckedDirective = class CheckedDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngOnChanges(changes) {
        // const element = this.el.nativeElement;
        // this.renderer.setStyle(element,'list-style-image', 'url(assets/details.png)');
        // this.renderer.setStyle(element, 'background', 'blue');
        if (changes.input) {
            console.log('input changed');
        }
    }
};
CheckedDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
CheckedDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appChecked]'
    })
], CheckedDirective);



/***/ }),

/***/ "./src/app/shared/modal/common-modal/common-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modal/common-modal/common-modal.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* MODAL STYLES\r\n-------------------------------*/\r\napp-common-modal {\r\n    /* modals are hidden by default */\r\n    display: none;\r\n}\r\n.app-common-modal {\r\n        /* modal container fixed across whole screen */\r\n        position: absolute ;\r\n        top: 50%;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        width: 30%;\r\n        /* z-index must be higher than .jw-modal-background */\r\n        z-index: 1000;\r\n        \r\n        /* enables scrolling for tall modals */\r\n        overflow: auto;\r\n    }\r\n.app-common-modal-body {\r\n            border-radius: 10px !important; \r\n            padding: 20px;\r\n            background: #fff;\r\n\r\n            /* margin exposes part of the modal background */\r\n            margin: 40px;\r\n            \r\n        }\r\n.app-common-modal-background {\r\n        /* modal background fixed across whole screen */\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n\r\n        /* semi-transparent black  */\r\n        background-color: #000;\r\n        opacity: 0.75;\r\n        \r\n        /* z-index must be below .jw-modal and above everything else  */\r\n        z-index: 900;\r\n    }\r\nbody.app-common-modal-open {\r\n    /* body overflow is hidden to hide main scrollbar when modal window is open */\r\n    overflow: hidden;\r\n}\r\n.buttonProp {\r\n    margin-right: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsL2NvbW1vbi1tb2RhbC9jb21tb24tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Z0NBQ2dDO0FBQ2hDO0lBQ0ksaUNBQWlDO0lBQ2pDLGFBQWE7QUFDakI7QUFDSTtRQUNJLDhDQUE4QztRQUM5QyxtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLFFBQVE7UUFDUixTQUFTO1FBQ1QsU0FBUztRQUNULGdDQUFnQztRQUNoQyxVQUFVO1FBQ1YscURBQXFEO1FBQ3JELGFBQWE7O1FBRWIsc0NBQXNDO1FBQ3RDLGNBQWM7SUFDbEI7QUFDSTtZQUNJLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2IsZ0JBQWdCOztZQUVoQixnREFBZ0Q7WUFDaEQsWUFBWTs7UUFFaEI7QUFHSjtRQUNJLCtDQUErQztRQUMvQyxlQUFlO1FBQ2YsTUFBTTtRQUNOLFFBQVE7UUFDUixTQUFTO1FBQ1QsT0FBTzs7UUFFUCw0QkFBNEI7UUFDNUIsc0JBQXNCO1FBQ3RCLGFBQWE7O1FBRWIsK0RBQStEO1FBQy9ELFlBQVk7SUFDaEI7QUFFSjtJQUNJLDZFQUE2RTtJQUM3RSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC9jb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogTU9EQUwgU1RZTEVTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5hcHAtY29tbW9uLW1vZGFsIHtcclxuICAgIC8qIG1vZGFscyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuICAgIC5hcHAtY29tbW9uLW1vZGFsIHtcclxuICAgICAgICAvKiBtb2RhbCBjb250YWluZXIgZml4ZWQgYWNyb3NzIHdob2xlIHNjcmVlbiAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIC8qIHotaW5kZXggbXVzdCBiZSBoaWdoZXIgdGhhbiAuanctbW9kYWwtYmFja2dyb3VuZCAqL1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogZW5hYmxlcyBzY3JvbGxpbmcgZm9yIHRhbGwgbW9kYWxzICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICAgICAgLmFwcC1jb21tb24tbW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAvKiBtYXJnaW4gZXhwb3NlcyBwYXJ0IG9mIHRoZSBtb2RhbCBiYWNrZ3JvdW5kICovXHJcbiAgICAgICAgICAgIG1hcmdpbjogNDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcblxyXG4gICAgLmFwcC1jb21tb24tbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgLyogc2VtaS10cmFuc3BhcmVudCBibGFjayAgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLyogei1pbmRleCBtdXN0IGJlIGJlbG93IC5qdy1tb2RhbCBhbmQgYWJvdmUgZXZlcnl0aGluZyBlbHNlICAqL1xyXG4gICAgICAgIHotaW5kZXg6IDkwMDtcclxuICAgIH1cclxuXHJcbmJvZHkuYXBwLWNvbW1vbi1tb2RhbC1vcGVuIHtcclxuICAgIC8qIGJvZHkgb3ZlcmZsb3cgaXMgaGlkZGVuIHRvIGhpZGUgbWFpbiBzY3JvbGxiYXIgd2hlbiBtb2RhbCB3aW5kb3cgaXMgb3BlbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ1dHRvblByb3Age1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/shared/modal/common-modal/common-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modal/common-modal/common-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommonModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModalComponent", function() { return CommonModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/modal/modal.service */ "./src/app/services/modal/modal.service.ts");



let CommonModalComponent = class CommonModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'app-common-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('app-common-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('app-common-open');
    }
};
CommonModalComponent.ctorParameters = () => [
    { type: src_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommonModalComponent.prototype, "id", void 0);
CommonModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-modal',
        template: __importDefault(__webpack_require__(/*! raw-loader!./common-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal/common-modal/common-modal.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__importDefault(__webpack_require__(/*! ./common-modal.component.css */ "./src/app/shared/modal/common-modal/common-modal.component.css")).default]
    })
], CommonModalComponent);



/***/ }),

/***/ "./src/app/shared/models/address.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/address.model.ts ***!
  \************************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Address {
}


/***/ }),

/***/ "./src/app/shared/models/doctor.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/doctor.model.ts ***!
  \***********************************************/
/*! exports provided: Doctor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctor", function() { return Doctor; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Doctor {
}


/***/ }),

/***/ "./src/app/shared/models/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class User {
}


/***/ }),

/***/ "./src/app/shared/models/visit.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/visit.model.ts ***!
  \**********************************************/
/*! exports provided: Visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visit", function() { return Visit; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Visit {
}


/***/ }),

/***/ "./src/app/shared/utils/passwordMatcher.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/utils/passwordMatcher.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Progamowanie\OneMeVisit\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map