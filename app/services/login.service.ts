import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Config } from './../util/config';
import { Header } from './../util/header';

import { Profile } from './../models';

import { DefaultService } from './../util/default.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService extends DefaultService {

    // Filled on AuthService, it's the URL that the user tried to access, but was blocked by the CanActivate
    // It'll be used to redirect the user after the login successful.
    redirectUrl: string = '';

    loggedUser: Profile;

    constructor(private _http: Http, private _config: Config, private _header: Header, private _router: Router) {
        super(_header);

        if (this.isLogged()) {
            this.loggedUser = new Profile(JSON.parse(localStorage.getItem('logged_user')));
        }
    }

    login(username, password) {
        return super.post(this._http, this._config.URLLogin(), { username, password })
            .map((res) => {
                let data = res.json();
                if (! data.error) {
                    console.log(data);
                    let userData: Profile = new Profile(data.profile);
                    userData.token = data.token;

                    this.setLoggedUser(userData);
                }

                return data;
            });
    }

    logout() {
        localStorage.removeItem('logged_user');
        this.loggedUser = null;
        this.redirectUrl = '';
    }

    isLogged() {
        return !!localStorage.getItem('logged_user');
    }

    setLoggedUser(user: Profile) {
        this.loggedUser = user;
        localStorage.setItem('logged_user', JSON.stringify(this.loggedUser));
    }
}