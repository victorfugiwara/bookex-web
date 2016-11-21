import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './services';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

	constructor(private _router: Router, private _loginService: LoginService) {

	}

    logout() {
        this._loginService.logout();

        this._router.navigate(['login']);
    }
}