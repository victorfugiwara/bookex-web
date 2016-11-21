export class Profile {

	id: number;
	username: string;
    email: string;
	firstName: string;
	lastName: string;
	picture: string;
	token: string;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.picture = json.picture;
            this.token = json.token;

            if (json.user) {
                this.username = json.user.username;
                this.email = json.user.email;
                this.firstName = json.user.first_name;
                this.lastName = json.user.last_name;
            } else {
                this.username = json.username;
                this.email = json.email;
                this.firstName = json.firstName;
                this.lastName = json.lastName;
                }
        }
    }
}