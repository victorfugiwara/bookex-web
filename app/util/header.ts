import {Injectable} from '@angular/core'
import {Headers} from '@angular/http'

@Injectable()
export class Header {

    constructor() { }

    public getJsonHeaders(token?: string) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        if (token) {
            headers.append('Authorization', 'JWT ' + token);
        }

        return { headers: headers };
    }
}