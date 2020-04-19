import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    registrationView() {
        this.router.navigate(['/registration']);
    }
    login() {
        this.router.navigate(['/login']);
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map