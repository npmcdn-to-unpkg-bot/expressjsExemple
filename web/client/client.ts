/**
 * Client
 */
export class Client {
	_id: number;
	id: number;
	nom: string;
	prenom: string;
	age: number;
	caution: number;
	
	constructor(_id: number, id: number, nom: string, prenom: string, age: number, caution: number) {
		this._id = id;
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.caution = caution;
	}
}