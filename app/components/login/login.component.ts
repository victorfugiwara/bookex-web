import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './../../services';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: '/app/components/login/login.component.html'
})
export class LoginComponent implements OnInit {

	errorMessage: string = '';

	username: string = 'victor';
	password: string = 'washburn';

	constructor(private _loginService: LoginService, private _router: Router) {}

	ngOnInit() {
		
	}

    login() {
        this.errorMessage = '';

        if (this.username.trim() == '') {
            this.errorMessage = 'Login inválido.';
            return;
        }
        if (this.password.trim() == '') {
            this.errorMessage = 'Senha inválida.';
            return;
        }

        this._loginService.login(this.username, this.password)
            .subscribe(
                (success) => {
                    if (this._loginService.redirectUrl != '') {
                        this._router.navigate([this._loginService.redirectUrl]);
                    } else {
                        this._router.navigate(['home']);
                    }
                },
                (error) => {
                    console.log(error);
                    this.errorMessage = error.message;
                }
            );
    }
}