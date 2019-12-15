import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from './Service/authentication.service';
import { Erreurs } from './Erreurs';
import { Router } from '@angular/router';

@Injectable()
export class apiInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private authService: AuthenticationService, private router: Router) {

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
                //Erreurs.gestionErreur(error.status);
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate(['/accueil']);
                  });
            })
        );
    }
}