import { Category } from './category';
import { Author } from './author';
import { Config } from './../util/config';

export class Book {

	id: number;
	name: string;
	category: Category;	
	author: Author;
	picture: string;

	constructor(json?) {
		if (json) {
			this.id = json.id;
			this.name = json.name;

			this.category = new Category(json.category);
			this.author = new Author(json.author);

			let c = new Config();
			this.picture = c.REST_URL_MEDIA + json.picture;
		}
	}	
}