import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Config } from './../util/config';
import { Header } from './../util/header';

import { DefaultService } from './../util/default.service';

import { Book } from './../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService extends DefaultService {

    constructor(private _http: Http, private _config: Config, private _header: Header) {
        super(_header);
    }


    getBook(idBook: number, token: string): Observable<Book> {
        return super.get(this._http, this._config.URLBooks(idBook), token)
            .map((res) => {
                let data = res.json();
                return new Book(data);
            });
    }

    listBook(token: string): Observable<Book[]> {
        return super.get(this._http, this._config.URLBooks(), token)
            .map((res) => {
                let data = res.json();
                let list: Book[] = [];
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    let book = new Book(element);
                    list.push(book);
                }
                return list;
           });
    }
}