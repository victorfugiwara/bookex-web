export class Category {

	id: number;
	name: number;

	constructor(json?) {
		if (json) {
			this.id = json.id;
			this.name = json.name;
		}
	}		
}