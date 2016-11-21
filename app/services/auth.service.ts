import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthService implements CanActivate {
    
    constructor(private _loginService: LoginService, private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this._loginService.isLogged()) {
            return true; 
        }

        // Store the URL that the user tried to access
        this._loginService.redirectUrl = state.url;

        console.log(state.url);

        // Redirect to the login page
        this._router.navigate(['/login']);

        return false;
    }
}