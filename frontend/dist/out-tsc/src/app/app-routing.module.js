import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
const routes = [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponents = [RegistrationComponent, LoginComponent, UserComponent];
//# sourceMappingURL=app-routing.module.js.map