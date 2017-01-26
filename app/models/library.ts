import { Book } from './book';
import { Profile } from './profile';

export class Library {

	id: number;
	profile: Profile;
	book: Book;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            
            this.profile = new Profile(json.profile);

            this.book = new Book(json.book);
        }
    }
}