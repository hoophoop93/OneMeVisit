import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { OauthService } from 'src/app/services/oauth/oauth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public oauth: OauthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.oauth.getToken() != null) {
            let header = 'Bearer ' + this.oauth.getAccessToken();

            let headers = request.headers
                .set('Authorization', header);
            request = request.clone({ headers });
        }
        return next.handle(request);
    }
}