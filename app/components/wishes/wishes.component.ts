import { Component, OnInit } from '@angular/core';

import { Wish, Book } from './../../models';

import { LoginService, WishesService, BookService } from './../../services';

@Component({
	moduleId: module.id,
	selector: 'wishes',
	templateUrl: '/app/components/wishes/wishes.component.html'
})
export class WishesComponent implements OnInit {

	userWishes: Wish[];
	query: string = '';
	booksArray: Book[];

	constructor(private _loginService: LoginService, private _wishesService: WishesService, private _bookService: BookService) {}

	ngOnInit() {
		this.listWishes();

		this._bookService.listBook(this._loginService.loggedUser.token).subscribe((list) => {
			this.booksArray = list;

            this.booksArray.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }  else {
                    return -1
                }
            });

		})
	}

	listWishes() {
		this.userWishes = [];
		this._wishesService.listWishes(this._loginService.loggedUser.id, this._loginService.loggedUser.token).subscribe((list) => {
			this.userWishes = list;

            this.userWishes.sort(function (a, b) {
                if (a.book.name > b.book.name) {
                    return 1;
                }  else {
                    return -1
                }
            });

		});
		this.query = '';
	}

	onSelectBook(book) {
		if (this.userWishes.filter(x => x.book.id == book.id).length == 0) {
			let wish = new Wish();
			wish.profile = this._loginService.loggedUser;
			wish.book = book;
			this._wishesService.addWish(wish, this._loginService.loggedUser.token).subscribe((item) => {
				this.userWishes.push(item);
				this.query = '';
			});
		}
	}

	removeWish(wish) {
		this._wishesService.removeWish(this._loginService.loggedUser.id, wish.book.id, this._loginService.loggedUser.token).subscribe((item) => {
			this.listWishes();
		});

	}
}