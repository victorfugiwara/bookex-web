import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from './../../models';

import { LoginService, ProfileService } from './../../services';

@Component({
	moduleId: module.id,
	selector: 'edit-profile',
	templateUrl: '/app/components/profile/edit-profile.component.html'
})
export class EditProfileComponent implements OnInit {

	errorMessage: string;
	user: Profile;
    password: string;
	newPassword: string;
	confirmNewPassword: string;

	constructor(private _router: Router, private _loginService: LoginService, private _profileService: ProfileService) {}

	ngOnInit() {
		this.user = new Profile(this._loginService.loggedUser);
	}

	saveProfile() {
        this.errorMessage = "";
        if (this.newPassword != "") {
            if (this.confirmNewPassword == "") {
                this.errorMessage = "Digite a confirmação da senha.";
                return;
            }

            if (this.newPassword != this.confirmNewPassword) {
                this.errorMessage = "A confirmação de senha não está igual a nova senha.";
                return;
            }
        }

        this._profileService.saveProfile(this.user, this.password, this.newPassword, this.confirmNewPassword)
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