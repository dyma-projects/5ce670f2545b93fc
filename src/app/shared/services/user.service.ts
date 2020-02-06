import { Injectable } from '@angular/core';

import { BehaviorSubject  } from "rxjs";

@Injectable()
export class UserService {

	//public user:User;
	public user: string[]=[];
	public userlastAdd: string[]=[];

	public users: BehaviorSubject<any> = new BehaviorSubject(this.user);
	public usersSubject: BehaviorSubject<any> = new BehaviorSubject(this.users.value[0]);
	

	addUser(userParam : string):void{
		
		this.userlastAdd.push(userParam);
		this.user.push(userParam);
		console.log('[last : ]',this.user.slice(-1)[0])
		console.log('[SERVICE]',this.users);
		console.log('[SERVICE]',this.user)
		console.log('[SERVICE LAST]',this.usersSubject)

	}

	removeUser(index : number):void{
		this.user.splice(index,1);
		
			
		console.log('[SERVICE]',this.users);
		console.log('[SERVICE]',this.user)
	}


  constructor() { }
}
