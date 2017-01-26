import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Http, Headers } from '@angular/http';

import { Header } from './header';

import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class DefaultService {

    constructor(private _defaultHeader: Header) {
    }

    private handleError(error: any) {
        let retorno = "";
        if (error instanceof Response) {
            if (error.status == 0) {
                retorno = 'Server not found.';
            } else {
                retorno = error.json().error.message;
            }
        } else {
            retorno = 'Timeout ' + error;
        }

        return Observable.throw(JSON.parse('{ "message" : "' + retorno + '" }'));
    }

    protected post(http: Http, endpoint: string, data: Object, token?: string): Observable<any> {
        return http.post(endpoint, JSON.stringify(data), this._defaultHeader.getJsonHeaders(token))
            .catch(this.handleError);
    }

    protected put(http: Http, endpoint: string, data: Object, token: string): Observable<any> {
        return http.put(endpoint, JSON.stringify(data), this._defaultHeader.getJsonHeaders(token))
            .catch(this.handleError);
    }

    protected get(http: Http, endpoint: string, token: string): Observable<any> {
        return http.get(endpoint, this._defaultHeader.getJsonHeaders(token))
            .catch(this.handleError);
    }

    protected delete(http: Http, endpoint: string, token: string): Observable<any> {
        return http.delete(endpoint, this._defaultHeader.getJsonHeaders(token))
            .catch(this.handleError);
    }
}