import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Config } from './../util/config';
import { Header } from './../util/header';

import { DefaultService } from './../util/default.service';

import { Profile } from './../models';
import { LoginService } from './../services';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService extends DefaultService {

    constructor(private _http: Http, private _config: Config, private _header: Header, private _loginService: LoginService) {
        super(_header);
    }

    registerNewUser(username: string, email: string, password: string): Observable<any> {
    	let sendData = {'username': username, 'email': email, 'password': password};
        return super.post(this._http, this._config.URLRegister(), sendData, null)
            .map((res) => {
                let data = res.json();
                if (! data.error) {
                    let newProfile: Profile = new Profile(data.profile);
                    newProfile.token = data.token;

                    this._loginService.setLoggedUser(newProfile);
                }

                return data;
            });
    }

    saveProfile(user: Profile, password: string, newPassword: string, confirmNewPassord: string): Observable<any> {
        let sendData = {
            'first_name': user.firstName, 
            'last_name': user.lastName, 
            'email': user.email, 
            'password': password, 
            'new_password': newPassword,
            'confirm_new_password': confirmNewPassord
        };
        return super.put(this._http, this._config.URLProfile(user.id), sendData, user.token)
            .map((res) => {
                let data = res.json();
                if (! data.error) {
                    console.log(data);
                    let logged = this._loginService.loggedUser;
                    let changed: Profile = new Profile(data);
                    logged.firstName = changed.firstName;
                    logged.lastName = changed.lastName;
                    logged.email = changed.email;
                    logged.picture = changed.picture;

                    this._loginService.setLoggedUser(logged);
                }

                return data;
            });
    }
}