import { UserService } from './user.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.userService.getToken();

        let authReq;
        if (token != null) {
            authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        } else {
            authReq = req.clone();
        }

        return next.handle(authReq);
    }
}
