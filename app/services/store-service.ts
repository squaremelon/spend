import {Injectable} from 'angular2/core';

@Injectable()
export class StoreService {

	public user = {
		name: "Angus McMillan"
	}

	constructor() {
		console.log("construct StoreService");
  }

	public pullUserObject() {
		return this.user.name;
	}

}
