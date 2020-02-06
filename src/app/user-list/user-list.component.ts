import { Component, OnInit ,AfterViewChecked } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: string[]=[];

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.userService.users.subscribe((users : any) => {
        this.users = users;
        console.log("AfterViewChecked");
    })
  }


  ngAfterViewChecked(){
    //console.log("AfterViewChecked");
    this.userService.users.subscribe((users : any) => {
        this.users = users;
    })
  }

  removeUser(index : number){
    this.userService.removeUser(index);
  }

}
