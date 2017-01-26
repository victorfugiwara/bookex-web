import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Config } from './../util/config';
import { Header } from './../util/header';

import { DefaultService } from './../util/default.service';

import { Library, Book } from './../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LibraryService extends DefaultService {

    constructor(private _http: Http, private _config: Config, private _header: Header) {
        super(_header);
    }

    listLibrary(idUser: number, token: string): Observable<Library[]> {
        return super.get(this._http, this._config.URLUserLibrary(idUser), token)
           .map((res) => {
                let data = res.json();
                let list: Library[] = [];
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    let lib = new Library(element);
                    list.push(lib);
                    
                }
                return list;
           });
    }

    addLibrary(library: Library, token: string): Observable<Library> {
        return super.post(this._http, this._config.URLUserLibrary(library.profile.id), library.book, token)
            .map((res) => {
                let data = res.json();
                return new Library(data);
            });
    }

    removeLibrary(idUser: number, idBook: number, token: string): Observable<any> {
        return super.delete(this._http, this._config.URLUserLibrary(idUser, idBook), token)
            .map((res) => {
                let data = res.json();
                return data;
            });
    }

}