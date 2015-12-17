import {Injectable} from 'angular2/core';

@Injectable()
export class Storejs {
	constructor() {

  }

	public pullUserObject () {
		return console.log('pullUserObject');
	}

	public pushUserObject () {
		return console.log('pushUserObject');
	}
}
