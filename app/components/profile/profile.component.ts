import { Component, OnInit, Input } from '@angular/core';

import { Profile } from './../../models';

@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: '/app/components/profile/profile.component.html'
})
export class ProfileComponent implements OnInit {

	@Input() user: Profile;

	constructor() {}

	ngOnInit() {
	}

    fileChangeEvent(fileInput: any){
        let file = fileInput.target.files[0];

        if (file) {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.user.picture = btoa(reader.result);
            }

            reader.readAsBinaryString(file);
        }        
    }
}