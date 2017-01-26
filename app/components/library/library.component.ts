import { Component, OnInit } from '@angular/core';

import { Library, Book } from './../../models';

import { LoginService, LibraryService, BookService } from './../../services';

@Component({
	moduleId: module.id,
	selector: 'library',
	templateUrl: '/app/components/library/library.component.html'
})
export class LibraryComponent implements OnInit {

	userLibrary: Library[];
	query: string = '';
	booksArray: Book[];

	constructor(private _loginService: LoginService, private _libraryService: LibraryService, private _bookService: BookService) {}

	ngOnInit() {
		this.listLibrary();

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

	listLibrary() {
		this.userLibrary = [];
		this._libraryService.listLibrary(this._loginService.loggedUser.id, this._loginService.loggedUser.token).subscribe((list) => {
			this.userLibrary = list;

            this.userLibrary.sort(function (a, b) {
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
		if (this.userLibrary.filter(x => x.book.id == book.id).length == 0) {
			let lib = new Library();
			lib.profile = this._loginService.loggedUser;
			lib.book = book;
			this._libraryService.addLibrary(lib, this._loginService.loggedUser.token).subscribe((item) => {
				this.userLibrary.push(item);
				this.query = '';
			});
		}
	}

	removeLibrary(lib) {
		this._libraryService.removeLibrary(this._loginService.loggedUser.id, lib.book.id, this._loginService.loggedUser.token).subscribe((item) => {
			this.listLibrary();
		});

	}
}