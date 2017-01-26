import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Config } from './../util/config';
import { Header } from './../util/header';

import { DefaultService } from './../util/default.service';

import { Wish, Book } from './../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WishesService extends DefaultService {

    constructor(private _http: Http, private _config: Config, private _header: Header) {
        super(_header);
    }

    listWishes(idUser: number, token: string): Observable<Wish[]> {
        return super.get(this._http, this._config.URLUserWishes(idUser), token)
           .map((res) => {
                let data = res.json();
                let list: Wish[] = [];
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    let wish = new Wish(element);
                    list.push(wish);
                    
                }
                return list;
           });
    }

    addWish(wish: Wish, token: string): Observable<Wish> {
        return super.post(this._http, this._config.URLUserWishes(wish.profile.id), wish.book, token)
            .map((res) => {
                let data = res.json();
                return new Wish(data);
            });
    }

    removeWish(idUser: number, idBook: number, token: string): Observable<any> {
        return super.delete(this._http, this._config.URLUserWishes(idUser, idBook), token)
            .map((res) => {
                let data = res.json();
                return data;
            });
    }
}