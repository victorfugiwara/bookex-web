export class Config {

    REST_URL_API: string = 'http://localhost:8000/api';
    REST_URL_MEDIA: string = 'http://localhost:8000';
    
    URLRegister(): string {
        return this.REST_URL_API + '/register';
    }

    URLLogin(): string {
        return this.REST_URL_API + '/login';
    }

    URLProfile(idUser: number): string {
        return this.REST_URL_API + '/profile/' + idUser;
    }

    URLUserLibrary(idUser: number, idBook?: number): string {
        let url = this.REST_URL_API + '/users/' + idUser + '/libraries';
        if (idBook) {
            url = url + '/' + idBook;
        }

        return url;
    } 

    URLUserWishes(idUser: number, idBook?: number): string {
        let url = this.REST_URL_API + '/users/' + idUser + '/wishes';
        if (idBook) {
            url = url + '/' + idBook;
        }

        return url;
    } 

    URLBooks(idBook?: number): string {
        let url = this.REST_URL_API + '/books';
        if (idBook) {
            url = url + '/' + idBook;
        }
        return url + '/';
    }

    URLCombination(idUser: number): string {
        let url = this.REST_URL_API + '/users/' + idUser + '/combinations';
        return url;
    }
}