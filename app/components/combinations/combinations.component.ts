import { Component, OnInit } from '@angular/core';

import { Combination } from './../../models';

import { LoginService, CombinationService } from './../../services';

@Component({
	moduleId: module.id,
	selector: 'combinations',
	templateUrl: '/app/components/combinations/combinations.component.html'
})
export class CombinationsComponent implements OnInit {

	combinations: Combination[];

	constructor(private _loginService: LoginService, private _combinationService: CombinationService) {}

	ngOnInit() {
		this.listCombinations();
	}

	listCombinations() {
		this.combinations = [];
		this._combinationService.listCombinations(this._loginService.loggedUser.id, this._loginService.loggedUser.token).subscribe((list) => {
			this.combinations = list;

            this.combinations.sort(function (a, b) {
                if (a.book_wish.name > b.book_wish.name) {
                    return 1;
                }  else {
                    return -1
                }
            });

		});
	}

	trade(comb) {
	}
}