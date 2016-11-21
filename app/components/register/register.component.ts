import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProfileService } from './../../services';

@Component({
	moduleId: module.id,
	selector: 'register',
	templateUrl: '/app/components/register/register.component.html'
})
export class RegisterComponent implements OnInit {

	errorMessage: string = '';

	username: string = '';
	email: string = '';
	password: string = '';
	confirmPassword: string = '';

	constructor(private _router: Router, private _profileService: ProfileService) {

	}

	ngOnInit() {
		
	}

	confirm() {
		this.errorMessage = "";

		if (this.password != this.confirmPassword) {
			this.errorMessage = 'A senha não é a mesma da confirmação.';
			return;
		}

		this._profileService.registerNewUser(this.username, this.email, this.password)
		.subscribe(
			(success) => {
				this._router.navigate(['home']);
			},
			(error) => {
				console.log(error);
				this.errorMessage = error.message;
			}
		);
	}
}