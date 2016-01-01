import {Injectable} from 'angular2/core';

@Injectable()
export class StoreService {

	data = {
		"name": "Angus McMillan"
	}

	constructor() {

  }

	static set() {

	}

	public get() {
		return this.data;
	}

}
