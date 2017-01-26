import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Config } from './../util/config';
import { Header } from './../util/header';

import { DefaultService } from './../util/default.service';

import { Combination } from './../models';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CombinationService extends DefaultService {

    constructor(private _http: Http, private _config: Config, private _header: Header) {
        super(_header);
    }

    listCombinations(idUser: number, token: string): Observable<Combination[]> {
        return super.get(this._http, this._config.URLCombination(idUser), token)
           .map((res) => {
                let data = res.json();
                let list: Combination[] = [];
                for (var index = 0; index < data.length; index++) {
                    var element = data[index];
                    let lib = new Combination(element);
                    list.push(lib);
                    
                }
                return list;
           });
    }
}