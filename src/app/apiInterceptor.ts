import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './Service/authentication.service';
import { Erreurs } from './Erreurs';

@Injectable()
export class apiInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private authService: AuthenticationService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Apply the headers
        if (this.authService.isAuthenticated()) {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${this.authService.getToken().access_token}`
                }
            });
        }
        // Also handle errors globally
        return next.handle(req).pipe(
            tap(x => x, error => {
                // Handle this err
                Erreurs.gestionErreur(error.status);
                //console.error(`Error performing request, status code = ${err.status}`);
            })
        );
    }
}