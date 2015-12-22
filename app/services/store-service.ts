import {Injectable} from 'angular2/core';

@Injectable()
export class StoreService {

	constructor() {
		console.log("construct StoreService");
  }

	public user = {
		name: "Angus McMillan"
	}

	public pullUserObject () {
		return this.user.name;
	}

}
