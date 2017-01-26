import { Book } from './book';
import { Profile } from './profile';

export class Combination {

	profile: Profile;
	book_wish: Book;
	book_library: Book;

    constructor(json?) {
        if (json) {
            this.profile = new Profile(json.profile);

            this.book_wish = new Book(json.book_wish);
            this.book_library = new Book(json.book_library);
        }
    }
}