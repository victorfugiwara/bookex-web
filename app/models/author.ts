export class Author {
	
	id: number;
	firstName: string;
	lastName: string;

	constructor(json?) {
		if (json) {
			this.id = json.id;
			this.firstName = json.first_name;
			this.lastName = json.last_name;
		}
	}

	fullName(): string {
		return this.firstName + ' ' + this.lastName;
	}
}