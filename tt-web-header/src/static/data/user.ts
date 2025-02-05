export class User {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;

	constructor(id: string, data: Partial<User>) {
        this.id = id;
        this.email = typeof data.email === 'string' ? data.email : '';
        this.firstName = typeof data.firstName === 'string' ? data.firstName : '';
        this.lastName = typeof data.lastName === 'string' ? data.lastName : '';
        this.imageUrl = typeof data.imageUrl === 'string' ? data.imageUrl : '';
	}
}